
const resolvers = {
    Query: {
    getMovieDetails: (_, {id, source}, { dataSources }) => {
            return dataSources[source].getMovieDetail(id, source)
    },

    getMovies: (_, {page, source}, { dataSources }) =>  {
        return dataSources[source].getMoviesByPage(page, source)
    },

    getMoviesByGenre: (_ , { genre, source }, { dataSources }) => {
        return dataSources[source].getMovieGenreIds(genre)
    },

    getMoviesByQuery: (_ , { query, source }, { dataSources }) => {
        return dataSources[source].getMovieSearch(query, source)
    }
}
}

module.exports = resolvers