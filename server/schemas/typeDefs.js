const { gql} = require('apollo-server-express');

//  create typeDefs 
const typeDefs = gql`
    type Category {
        _id: ID
        categoryName: String
    },
    type Item {
        _id: ID
        itemName: String
        price: Float
        category: Category
    },
    type Order {
        _id: ID
        item: [Item]
        purchaseDate: String
    },

    type User {
        _id: ID
        username: String
        email: String
        city: String

    },
    type Auth {
        token: ID
        user: User
    },

    type Query {
            user: User
            categories: [Category]
            items(category: ID, name: String): [Item]
            item(_id: ID!): Item
            order(_id: ID!): Order
            checkout(items: [ID]!): Checkout
    }
    type Mutation {
        addUser(name: String!, email: String!, password: String!, city: String!): Auth 
        addOrder(items: [ID]!) : Order
        updateUser:(name: String, email: String, password: String, city: String) : User
        updateItem(_id:ID!) : Item
        login(email: String!, password: String!): Auth
    }

    type Checkout {
        session: ID
      }
`;

    // export the  typeDefs;
    module.exports = typeDefs;