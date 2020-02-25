const { RESTDataSource } = require('apollo-datasource-rest');

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
  
    ShowDetailReducer({tvdb_id,imdb_id, title, num_seasons, last_updated, synopsis, year, status, images} = {}) {
      return {
        tvdb_id,
        imdb_id,
        title,
        synopsis,
        status, 
        num_seasons,
        year, 
        last_updated,
        images : JSON.stringify(images)
      }
    }
  
    async getEpisodeDetails(id) {
      const result = await this.get(`show/${id}`)
      return Promise.all(result.episodes.map(episode => this.EpisodeDetailReducer(episode)))
    }
  
    async getShowDetails(id) {
      const result = await this.get(`show/${id}`)
      try {
        console.log(JSON.parse(this.ShowDetailReducer(result).images));
        
        return this.ShowDetailReducer(result)
      } catch (error) {
        console.log(error);
        
      }
    }
  
    async getShowsByPage(num) {
      const result = await this.get(`shows/${num}`)
      return Promise.all(result.map(result => this.ShowDetailReducer(result)));
  }
  
  async getShowSearch(query) {
    const result = await this.get(`shows/1?sort=rating&order=-1&genre=all&keywords=${query}`)
    console.log(result);
    return Promise.all(result.map(result => this.getShowDetails(result)));
  }
  
  }
  