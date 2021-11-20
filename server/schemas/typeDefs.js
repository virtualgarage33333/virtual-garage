// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
    type Category {
        _id: ID
        name: String
    }
   
    type Item {
        _id: ID
        name: String
        description: String
        image: String
        price: Float
        category: Category
    }
   
    type Order {
        _id: ID
        purchaseDate: String
        items: [Item]
    }
   
    type User {
        _id: ID
        name: String
        email: String
        orders: [Order]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
            user: User
            categories: [Category]
            items(category: ID, name: String): [Item]
            item(_id: ID!): Item
            order(_id: ID!): Order
    }

    type Mutation {
        addUser(name: String!, email: String!, password: String!, city: String!): Auth 
        addOrder(products: [ID]!) : Order
        updateUser:(name: String, email: String, password: String, city: String) : User
        updateItem(_id:ID!) : Item
        login(email: String!, password: String!): Auth
    }
`;

// export the typeDefs
module.exports = typeDefs;
