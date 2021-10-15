import Team from './team.js';

let list = [];
let pokemon = [];
let team1 = new Team();

function getData() {
    // fetch api data
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
        .then(response => {
            // console.log(response)
            return response.json();
        }).then(data => {
            list = data.results;
            // console.log(list);

            // loop over list to get all pokeman
            for(let element of list) {
                fetch(element.url).then(response => {
                    return response.json();
                }).then(data => {
                    console.log(data);
                    pokemon.push(data);
                })
            }
        }
    );
}

window.onload = function() {
    getData();
    setTimeout(buildList, 1000);

    function buildList() {
        let html =``;

        pokemon.sort(function(a,b) {
            return a.id - b.id;
        });

        for(let p of pokemon) {
            html += `
            <div class="col-3">
                <div class="pokemon">
                    <p class="pokemonNumber">Nr. ${p.id}</p>
                    <img class="pokemonImage" alt="test" src="${p.sprites.front_default}">
            
                    <div class="pokemonText">
                        <h2>${p.name}</h2>
                        <div class="grassPokemon">Grass</div>
                        <div class="poisonPokemon">Poison</div>

                        <button class="addPokemon" id="${p.id}"><i class="fas fa-plus"></i> Add Pokemon</button>
                    </div>
                </div>
            </div>`;
        }

        document.getElementById('form').innerHTML = html;
    }
}

// console.log(pokemon);
