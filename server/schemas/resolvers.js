const { AuthenticationError } = require("apollo-server-express");
const { User, Item, Category, Order } = require("../models");

const resolvers = {
    Query: {
        categories: async () => { 
            return await Category.find();
    },
    // Mutation: {
    // },
}
};

// export resolvers 
module.exports = resolvers;