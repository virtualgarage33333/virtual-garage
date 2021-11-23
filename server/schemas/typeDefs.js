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
        description: String
        price: Float
        category: Category
        user: User
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
        orders: [Order]
        Item: [Item]

    },
    type Auth {
        token: ID
        user: User
    },

    type Query {
        categories: [Category]
        items(category: ID, name: String): [Item]
        item(_id: ID!): Item
        user: User
        orders: [Order]
        myItems(user: ID!): [Item]
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!, city: String!): Auth
        addOrder(items: [ID]!): Order
        updateUser(username: String, email: String, password: String, city: String): User
        updateItem(_id: ID!, quantity: Int!): Item
        login(email: String!, password: String!): Auth
        addItem(itemName: String!, description: String!, price: Float!, category: ID, user: ID): Item
      }
    `;

    // export the  typeDefs;
    module.exports = typeDefs;