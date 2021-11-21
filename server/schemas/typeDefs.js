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
        categories: [Category]
        items(category: ID, name: String): [Item]
        item(_id: ID!): Item
        users: [User]
    }
    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addOrder(items: [ID]!): Order
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        updateItem(_id: ID!, quantity: Int!): Item
        login(email: String!, password: String!): Auth
        addItem(itemName: String!, description: String!, price: Float!, category: ID!): Item
      }
    `;

    // export the  typeDefs;
    module.exports = typeDefs;