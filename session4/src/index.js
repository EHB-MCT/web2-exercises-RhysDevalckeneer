'use strict';

// import Cleave
// https://www.npmjs.com/package/cleave.js
import Cleave from 'cleave.js';
require('cleave.js/dist/addons/cleave-phone.be');

window.onload = function () {
    console.log('Loaded');

    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();
    
        let name = document.getElementById('name').value;
        console.log('Clicked!');

        new Cleave('.name', {
            phone: true,
            phoneRegionCode: 'BE'
        });
        console.log(name);
    });

    
    
}



