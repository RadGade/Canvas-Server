const { ApolloServer } = require('apollo-server');
const  typeDefs  = require('./graphql/schema');
const resolvers  = require('./graphql/resolver');

const server  = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
         ...dataSources
    }),
});


server.listen().then(({url}) => console.log(`Server launched at ${url} 🚀`))