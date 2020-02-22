const fetch = require('node-fetch')

const resolvers = {
    Query: {
        getMovieDetails: (_, {id, source}, { dataSources }) => {
            return dataSources[source].getMovieDetail(id, source)
    }
}
}

module.exports = resolvers