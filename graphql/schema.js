const {gql} = require('apollo-server');

 const typeDefs = gql`
    
    type Torrent {
        url : String!
        filesize : String!
        provider : String!
        quality : String!
    }

    type Image {
        poster : String!
        backdrop : String!
    }

    type MovieDetails {
        id : String!
        title : String!
        year : Int!
        synopsis : String!
        runtime : String!
        relased : Int!
        certification : String!
        torrents : [Torrent]!
        trailer : String!
        images : [Image]
    }

    type Query {
        getMovieDetails(id: ID!) : MovieDetails
    }
`
module.exports = typeDefs;