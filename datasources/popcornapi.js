const { RESTDataSource } = require('apollo-datasource-rest');

export class PopcornAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://tv-v2.api-fetch.website/'
    }

    detailReducer({_id, title, url, filesize, year, synopsis, runtime, released, certification, trailer, torrents, images} = {}) {
        return {
            id : _id,
            title,
            year,
            synopsis,
            runtime,
            released,
            certification,
            trailer,
            images: images.poster,
            url : torrents.en['720p'].url,
            filesize : torrents.en['720p'].filesize,
        }
    }

    async getMovieDetail(id) {
        const result = await this.get(`movie/${id}`)
         console.log(this.detailReducer(result))
        return this.detailReducer(result)
    }

    getMoviesDetails(ids) {
        return Promise.all(ids.map(id => this.getMovieDetail(id)));
    }
}

