const { RESTDataSource } = require('apollo-datasource-rest');

export class PopcornAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://tv-v2.api-fetch.website/'
    }

    detailReducer({id, title, year, synopsis, runtime, relased, certification, trailer} = {}) {
        return {
            id,
            title,
            year,
            synopsis,
            runtime,
            relased,
            certification,
            trailer,
        }
    }

    async getMovieDetail(id) {
        const rawdata = await this.get(`movie/${id}`)
        let result = rawdata.json()
        return this.detailReducer(result)
    }

    getMoviesDetails(ids) {
        return Promise.all(ids.map(id => this.getMovieDetail(id)));
    }
}

