const express = require('express');
const path = require('path');
const db = require('./config/connection');

// import Apollo server
const { ApolloServer } = require('apollo-server-express');

// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();

// create Apollo server
const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware
    });
    // start the Apollo server
    await server.start();

    // integrate Apollo server with express application as middleware
    server.applyMiddleware({ app });
   
     // log where we can go to test our GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

    // initialize the Apollo server
    startServer();
    
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // serve static assets if in production
    if (process.env.NODE_ENV === 'production') {
        // set static folder
        app.use(express.static(path.join(__dirname, '../client/build')));
    }
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
      });
      

    // start server
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    });
