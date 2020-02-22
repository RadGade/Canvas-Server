import { RESTDataSource } from 'apollo-datasource-rest';

class PopcornAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://tv-v2.api-fetch.website/'
    }

    detailReducer({id, title, year, synopsis, runtime, relased, certification, torrents, trailer, images} = {}) {
        return {
            id,
            title,
            year,
            synopsis,
            runtime,
            relased,
            certification,
            torrents = {
                url,
                filesize,
                provider,
                quality
            },
            trailer,
            images = {
                poster,
                backdrop
            }
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

export default PopcornAPI