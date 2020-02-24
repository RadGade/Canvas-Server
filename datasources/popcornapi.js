const { RESTDataSource } = require('apollo-datasource-rest');

export class PopcornAPImovie extends RESTDataSource {
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
          images: images["poster"],
          url : torrents.en['720p'].url,
          filesize : torrents.en['720p'].filesize,
      }
  }

    async getMovieDetail(id) {
      const result = await this.get(`movie/${id}`)
      
      console.log(this.detailReducer(result).url)
      return this.detailReducer(result)
  }

    async getMoviesByPage(num) {
        const result = await this.get(`movies/${num}`)
        return Promise.all(result.map(result => this.detailReducer(result)));
    }

    async getMovieGenreIds(genre) {
        const result = await this.get(`movies/2?sort=rating&order=-1&genre=${genre}`)
        return Promise.all(result.map(result => this.detailReducer(result)));
    }

    async getMovieSearch(query) {
        const result = await this.get(`movies/1?sort=rating&order=-1&genre=all&keywords=${query}`)
        console.log(result);
        return Promise.all(result.map(result => this.detailReducer(result)));
    }

   async getMoviesDetails(genre) {
        let MovieIds = await this.getMovieGenreIds(genre)
         let data = await Promise.all(MovieIds.map(MovieId => this.getMovieDetail(MovieId)));
        console.log(data);
        return data

    }
}

export class PopcornAPIshows extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://tv-v2.api-fetch.website/'
  }

  EpisodeDetailReducer({tvdb_id, title, season, episode, overview, first_aired, torrents} = {}) {
    return {
      tvdb_id,
      title,
      season,
      episode,
      overview,
      first_aired,
      url : JSON.stringify(torrents)
    }
  }

  // ShowDetailReducer({tvdb_id, title, season, episode, overview, first_aired, torrents} = {}) {
  //   return {
  //     episodes : [],
  //   }
  // }

  async getShowDetails(id) {
    const result = await this.get(`show/${id}`)
    return Promise.all(result.episodes.map(episode => this.EpisodeDetailReducer(episode)))
  }

}
