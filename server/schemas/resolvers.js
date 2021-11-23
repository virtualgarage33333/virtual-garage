const { AuthenticationError } = require('apollo-server-express');

const { User, Item, Order, Comment, Category } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
          if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
              .select('-__v -password')
              .populate('item');
    
            return userData;
          }
    
          throw new AuthenticationError('Not logged in');
        },
        categories: async () => {
        return Category.find();
        },
        items: async (parent, { category, name }) => {
            const params = {};
      
            if (category) {
              params.category = category;
            }
      
            if (name) {
              params.name = {
                $regex: name
              };
            }
      
            return await Item.find(params).populate('category');
          },
          item: async (parent, { _id }) => {
            return await item.findById(_id).populate('category');
          },
          // users: async (parent, args, context) => {
          //   if (context.user) {
          //     const user = await User.findById(context.user._id).populate({
          //       path: 'orders.items',
          //       populate: 'category'
          //     });
      
          //     user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
      
          //     return user;
          //   }
      
          //   throw new AuthenticationError('Not logged in');
          // },
        orders : async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.items',
                    populate: 'category'
                });
                return user.orders.id(_id);
            }
            throw new AuthenticationError('Not logged in');
           }
        },
        Mutation: {
            addUser: async (parent, args) => {
              const user = await User.create(args);
              const token = signToken(user);
        
              return { token, user };
            },
            addOrder: async (parent, { products }, context) => {
              console.log(context);
              if (context.user) {
                const order = new Order({ products });
        
                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
        
                return order;
              }
        
              throw new AuthenticationError('Not logged in');
            },
            updateUser: async (parent, args, context) => {
              if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
              }
        
              throw new AuthenticationError('Not logged in');
            },
            login: async (parent, { email, password }) => {
                const user = await User.findOne({ email });
          
                if (!user) {
                  throw new AuthenticationError('Incorrect credentials');
                }
          
                const correctPw = await user.isCorrectPassword(password);
          
                if (!correctPw) {
                  throw new AuthenticationError('Incorrect credentials');
                }
          
                const token = signToken(user);
          
                return { token, user };
              },
            addItem: async (parent, args, context) => {
                if (context.user) {
                    const item = await Item.create(args);
                    await User.findByIdAndUpdate(context.user._id, { $push: { items: item } });
                    return item;
                }
        
                throw new AuthenticationError('Not logged in');
              } 
        }
        
};

module.exports = resolvers;