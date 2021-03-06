const { ApolloServer } = require('apollo-server');
const { resolvers, typeDefs } = require('./schema');

const port = process.env.PORT || 4000;

new ApolloServer({ resolvers, typeDefs }).listen({ port }, () => {
    console.log(`Server is running on http://localhost:${port}`);
})