const {gql} = require('apollo-server');

 const typeDefs = gql`
    
    type Torrent {
        url : String!
        filesize : String!
        provider : String!
        seed : Int
        size : Int
        peer : Int
    }

    type MovieDetails {
        id : String!
        filesize : String!
        title : String!
        year : String!
        synopsis : String!
        runtime : String!
        relased : Int
        certification : String
        trailer : String!
        images : String
        url : String
    }

    type Query {
        getMovieDetails(id: String!, source: String!) : MovieDetails!
        getMovies(page: Int!, source: String!) : [MovieDetails!]!
        getMoviesByGenre(genre: String!, source: String!) :[MovieDetails!]!
    }
`
module.exports = typeDefs;