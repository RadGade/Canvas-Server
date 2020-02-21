const fetch = require('node-fetch')

const resolvers = {
    Query: {
        getMovieDetails: (_, args) => {
            fetch(`https://tv-v2.api-fetch.website/movie/${args.id}`).then(async res => {
                var data = await res.json()
                console.log(data)
        })
    }
}
}

module.exports = resolvers