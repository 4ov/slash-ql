/**
 * For https://deno.land
 */



import Schema, {
  array as $array,
  boolean as $boolean,
  number as $number,
  object as $object,
  string as $string,
  unknown as $unknown
} from "https://denoporter.sirjosh.workers.dev/v1/deno.land/x/computed_types/src/index.ts";

import { Options, Resolvers } from "./types.ts";

const Query = Schema({
  query: $object.optional(),
  update: $object.optional(),
  $: $object.optional({}),
}).destruct();

class Sql {
  resolvers: Resolvers;
  types: any;
  options: Options;
  constructor(resolvers: Resolvers, types: any, options?: Options) {
    this.resolvers = resolvers;
    this.types = types;
    this.options = options ?? {};
  }

  

  private evalArgs(args: any, vars: any) {
    const self = this;
    const vReg = /\$([_a-zA-Z][_a-zA-Z0-9]{0,30})/g;
    if (typeof args == "string") {
      let test = vReg.exec(args);
      if (test) {
        args = args == test[0]
          ? vars[test[1]]
          : args.replace(test[0], vars[test[1]]);
      }
    } else if (typeof args == "object" && "length" in args) { //# array
      args = args.map((arg: any) => self.evalArgs(arg, vars));
    } else if (typeof args == "object" && !("length" in args)) { //# object
      Object.keys(args).forEach((arg) => {
        args[arg] = self.evalArgs(args[arg], vars);
      });
    }
    return args;
  }

  private async processQuery(q: any, ctx: any) {
    return new Promise(async (res, rej) => {
      const self = this;
      let query = q.query,
        vars = q.$,
        current = "query",
        result : any = {};
      if (!(typeof query == "object" && !("length" in query))) { rej({ error: true, at: current, message: "query should be an object", }); }
      if (!Object.keys(query).length)rej({ error : true, at : current, message : `query can't be empty` })
      for (let element in query) {
        current = element;
        if (!(element in self.types)) { rej({ error: true, at: current, message: `${element} is not defined in types`, }); }
        if (!(element in (self.resolvers.query as any))) { rej({ error: true, at: current, message: `${element} is not defined in types`, }); }

        try{
          let elChecker = Schema(self.types[element], {strict : true}).destruct()
          let elArgs = self.evalArgs(query[element], vars)
          let elResult = await (self.resolvers.query as any)[element](elArgs, ctx)
          let [err, success] = elChecker(elResult);
          if(err)rej({ error : true, at : current, message : err })
          result[element] = elResult
        }catch(err){
          rej({
            error : true,
            at : current,
            message : err
          })
          
        }
      }
      res(result)
    });
  }

  async process(query: any, context: any) {
    return new Promise(async (res, rej) => {
      let [err, q] = Query(query);
      let result: { data?: any; result?: any } = {};
      let current = "root";
      if (err) {
        rej({ error: true, at: current, message: err });
      }
      if (!(q?.query) && !(q?.update)) {
        rej({
          error: true,
          at: current,
          message: `query should contain at least one query or update`,
        });
      }

      if (q?.query) {
        result["data"] = await this.processQuery(
          { query: q.query, $: q.$ },
          context,
        ).catch((err) => rej(err));
      }


      //! UPDATE IS NOT IMPLEMENTED YET


      res(result);
    });
  }
}

const string = $string.optional(),
  number = $number.optional(),
  boolean = $boolean.optional(),
  array = $array.optional(),
  object = $object.optional(),
  unknown = $unknown.optional()





export{
  Sql as default,
  string,
  number,
  boolean,
  array,
  object,
  unknown,
  $unknown,
  $array,
  $string,
  $object,
  $number,
  $boolean,
  Schema
}

export type { Resolvers } from './types.ts'