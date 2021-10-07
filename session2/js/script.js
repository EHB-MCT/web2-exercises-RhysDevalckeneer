"use strict";

import Team from '../js/Team.js';

let pokemon = [];

function getData() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response =>{ 
            response.json().then(data => {
                let list = data.results;
                // console.log(list);

                for(let element of list) {
                    fetch(element.url).then(response => {
                        // console.log('it works');
                        return response.json();
                        
                    }).then(data => {
                        // console.log(data.name)
                        pokemon.push(data);
                    })
                }
            });
        });
}

getData();

let team1 = new Team();

// console.log(pokemon);
