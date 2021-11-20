// const { AuthenticationError } = require('apollo-server-express');

const { User, Item, Order, Comment, Category } = require('../models');

const resolvers = {
    Query: {
        categories: async () => {
            return Category.findAll();
        },
    },
};