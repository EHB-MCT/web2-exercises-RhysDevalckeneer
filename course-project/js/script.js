'use strict';

const baseUrl = 'https://api.themoviedb.org/3/search/multi';
const apiKey = '?api_key=ace96559b8fb0dd613fdfd48023afa84';

window.onload = function () {
    console.log('Window is loaded!');

    async function getData(searchInput) {
        let url = `${baseUrl}${apiKey}&query=${searchInput}`;
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        return data;
    }

    let submitForm = event => {
        event.preventDefault();
        console.log('Button clicked!');
        
        // get input value 
        var value = document.getElementById('inputTitle').value;
        console.log(value)

        getData(value).then(result => {
            let movies = result.results;
            console.log(movies)
            let html;
            
            for(let movie of movies) {
                html += `
                    <div class="col-md-4">
                        <div class="pokemon">
                            <p class="pokemonNumber">Nr. ${movie.id}</p>
                            <img class="pokemonImage" alt="test" src="https://image.tmdb.org/t/p/w200/${movie.poster_path || movie.backdrop_path}">
                    
                            <div class="pokemonText">
                                <h2>${movie.name || movie.title}</h2>

                            </div>
                        </div>
                    </div>`;
            }
    
            document.getElementById('output').innerHTML = html;

            // console.log(movies)
        });
    }

    // Check when form is submitted
    document.getElementById('searchform').addEventListener('submit', submitForm);
    
}


