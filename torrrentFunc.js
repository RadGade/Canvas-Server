// this is a test file to experiment and play around with diffrent api calls

const fetch = require('node-fetch')

function showDetail(id) {
    fetch(`https://tv-v2.api-fetch.website/show/${id}`).then(async res => {
    var data = await res.json()
    console.log(data.title)
    return data;
})

}
function movieDetail(id) {
    fetch(`https://tv-v2.api-fetch.website/movie/${id}`).then(async res => {
    var data = await res.json()
    console.log(data)
    return data;
})
/*
{
    id : ttxxxxx,
    title : xxxxxx,
    year : xxxx,
    synopsis : xxx,
    runtime : xxx,
    relased: xxxx,
    certification: x,
    torrents : {
        1080p : {},
        720p : {},
    },
    trailer : xxx (youtube),
    genres : [],
    rating: {
        "percentage": 80,
        "votes": 27709,
  }
}
*/

}

function moviePage(num) {
    fetch(`https://tv-v2.api-fetch.website/movies/${num}`).then(async res => {
        var data = await res.json()
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].title)
            
        }
        return data;
    })
}

function showsPage(num) {
    fetch(`https://tv-v2.api-fetch.website/shows/${num}`).then(async res => {
        var data = await res.json()
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].title)
        }
        return data;
    })
}

function searchTV(query) {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=2e20d36181ae65941320be607d703529&language=en-US&query=${query}&page=1&include_adult=true`).then(async res => {
    var data = await res.json()
    for (let i = 0; i < data.results.length; i++) {
      
        if(data.results[i].media_type = "tv") {
            fetch(`https://api.themoviedb.org/3/tv/${data.results[i].id}/external_ids?api_key=2e20d36181ae65941320be607d703529&language=en-US`).then(async res => {
                var data = await res.json()
                if (data.imdb_id == undefined || null) {
                    console.log("oops");
                } else {
                    console.log(data.imdb_id);
                }
        })
        } 
    }
    return data;
})
}

function searchMovie(query) {
    let movies = []
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=2e20d36181ae65941320be607d703529&language=en-US&query=${query}&page=1&include_adult=true`).then(async res => {
        var data = await res.json()
        for (let i = 0; i < data.results.length; i++) {
          
            if(data.results[i].media_type = "tv") {
                fetch(`https://api.themoviedb.org/3/movie/${data.results[i].id}/external_ids?api_key=2e20d36181ae65941320be607d703529&language=en-US`).then(async res => {
                    var data = await res.json()
                    if (data.imdb_id == undefined || null) {
                        console.log("oops");
                    } else {
                        movies.push(data.imdb_id)
                    }
            })
            } 
        }
        return movies;
    })
}


module.exports = {
    searchMovie,
    searchTV,
    showDetail,
    showsPage,
    moviePage,
    movieDetail
}