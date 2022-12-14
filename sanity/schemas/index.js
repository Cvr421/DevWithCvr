// import { createSchema } from "part:@sanity/base/schema-creator"
import experience from "./experience"
import pageInfo from './pageInfo'
import social from "./social"
import skill from "./skill"
// import { schemaTypes } from "all:@sanity/base/schema-type";
// import { createSchema } from 'sanity'
//  export default createSchema({
//     name:"default",
//     types:schemaTypes.concat([
//         pageInfo,
//         skill,
//         social ,
//         experience,
//     ]),
//  })


// export default createSchema({
//     name:"default",
//     types:schemaTypes.concat([pageInfo,skill, experience, social,]),
// });

export const schemaTypes = [pageInfo,skill, experience, social ,]
