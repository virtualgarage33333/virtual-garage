// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
    type Category {
        _id: ID
        name: String!
    }
   
    type Product {
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
        products: [Product]
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
            products(category: ID, name: String): [Product]
            product(_id: ID): Product
            order(_id: ID): Order
    }

    type Mutation {
        addUser(name: String!, email: String!, password: String!, city: String!): Auth 
        addOrder(products: [ID]!) : Order
        updateUser:(name: String, email: String, password: String, city: String) : User
        updateProduct(_id:ID!) : Product
        login(email: String!, password: String!): Auth
    }
`;

// export the typeDefs
module.exports = typeDefs;
