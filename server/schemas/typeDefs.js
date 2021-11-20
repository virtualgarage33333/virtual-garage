const { gql} = require('apollo-server-express');

//  create typeDefs 
const typeDefs = gql`
    type Category {
        _id: ID
        categoryName: String
    },


    type Query {
        categories: [Category]
    }
    `;

    // export the  typeDefs;
    module.exports = typeDefs;