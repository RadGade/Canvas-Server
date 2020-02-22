import { ApolloServer } from 'apollo-server';
import resolvers from './graphql/resolver';
import typeDefs from './graphql/schema';
import dataSources from './datasources'

const server  = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
         ...dataSources
    }),
});


server.listen().then(({url}) => console.log(`Server launched at ${url} 🚀`))