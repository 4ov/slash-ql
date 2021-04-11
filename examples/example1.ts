/**
 * 11 Apr 2021
 * Example on nested queries in slash
 */

import Slashql, { string, number, $number, array, Resolvers, Schema } from '../index.ts'

//? We will make use of `pick` function of lodash

import _ from 'https://esm.sh/lodash'
const { pick } : any = _

const testData = [
    {
        id : 0,
        title : 'a movie',
        actors : ['aa', 'ab'],
        releaseDate : '2020'
    },
    {
        id : 1,
        title : 'b movie',
        actors : ['ba', 'bb'],
        releaseDate : '2020'
    },
    {
        id : 2,
        title : 'c movie',
        actors : ['ca', 'cb'],
        releaseDate : '2020'
    },
]


const resolver : Resolvers = {
    query : {
        async movie([id, picks], context){
            return pick(await testData.filter(row=>row.id==id)[0], picks)
        }   
    }
}

const types = {
    movie : {
        //! an error will be invoked if id is not requested in our query (types with $ is required)
        id : $number,
        title : string,
        actors : Schema.either(array.of(string), string),
        releaseDate : string
    }
}



const sql = new Slashql(resolver, types)


sql.process({
    query : {
        movie : [0, ["title", "actors", "id"]]
    }
}, {})
.then(e=>{
    console.log(e);
    
})
.catch(err=>{
    console.log(err);
})