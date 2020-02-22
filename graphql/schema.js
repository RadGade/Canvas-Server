const {gql} = require('apollo-server');

 const typeDefs = gql`
    
    type Torrent {
        url : String!
        filesize : String!
        provider : String!
        quality : String!
    }

    type MovieDetails {
        id : String!
        filesize : String!
        title : String!
        year : String!
        synopsis : String!
        runtime : String!
        relased : Int
        certification : String!
        trailer : String!
        image : String
        url : String!
    }

    type Query {
        getMovieDetails(id: String!, source: String!) : MovieDetails
        getMoview(page: Int!, source: String!) : [MovieDetails!]!
    }
`
module.exports = typeDefs;