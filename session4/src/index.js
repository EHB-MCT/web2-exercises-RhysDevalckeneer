
// import Cleave
// https://www.npmjs.com/package/cleave.js
import Cleave from 'cleave.js';

window.onload = function () {
    console.log('Loaded');
}

document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();

    let name = document.getElementById('').value;
    console.log('Clicked!');
    console.log(name);
});


