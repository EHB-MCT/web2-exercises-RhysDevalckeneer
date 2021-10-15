'use strict';

const baseUrl = 'http://www.omdbapi.com/?apikey=139164a5&';

window.onload = function () {
    console.log('Loaded!');

    let searchMovie = document.get

    let url = baseUrl + 't=seinfeld';
    getData(url).then(result =>
        console.log(result)
    ); 
}

async function getData(url) {
    let response = await fetch(url);
    return await response.json();
}
