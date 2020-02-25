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

    type ShowDetails {
        tvdb_id : Int!
        imdb_id : String!
        title : String!
        year : String!
        synopsis : String!
        status : String
        num_seasons : Int
        images : String!
        last_updated : Int
    }

    type Episode {
        tvdb_id : Int
        title : String
        season : Int
        episode : Int
        overview : String
        first_aired : Int
        url : String
    }

    type Query {
        getMovieDetails(id: String!, source: String!) : MovieDetails!
        getShowDetails(id: String!, source: String!) : ShowDetails!
        getEpisodeDetails(id: String!, source: String!) : [Episode!]!
        getMovies(page: Int!, source: String!) : [MovieDetails!]!
        getShows(page: Int!, source: String!) : [ShowDetails!]!
        getMoviesByGenre(genre: String!, source: String!) :[MovieDetails!]!
        getMoviesByQuery(query: String!, source: String!) :[MovieDetails!]!
    }
`
module.exports = typeDefs;