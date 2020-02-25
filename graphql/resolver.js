
const resolvers = {
    Query: {
    getMovieDetails: (_, {id, source}, { dataSources }) => {
            return dataSources[source].getMovieDetail(id, source)
    },

    getShowDetails: (_, {id, source}, { dataSources }) => {
        return dataSources[source].getShowDetails(id, source)
},

    getMovies: (_, {page, source}, { dataSources }) =>  {
        return dataSources[source].getMoviesByPage(page, source)
    },

    getShows: (_, {page, source}, { dataSources }) =>  {
        return dataSources[source].getShowsByPage(page, source)
    },

    getMoviesByGenre: (_ , { genre, source }, { dataSources }) => {
        return dataSources[source].getMovieGenreIds(genre)
    },

    getMoviesByQuery: (_ , { query, source }, { dataSources }) => {
        return dataSources[source].getMovieSearch(query, source)
    },


    getEpisodeDetails: (_, {id, source}, { dataSources }) => {
        return dataSources[source].getEpisodeDetails(id, source)
},
}
}

module.exports = resolvers
