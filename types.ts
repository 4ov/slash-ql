export type Resolvers = {
  query?: { [key: string]: (args: any[], context: any) => any };
  update? : { [key: string] : (args: any[], context: any) => any }
};

export type Options = { strict?: boolean };
