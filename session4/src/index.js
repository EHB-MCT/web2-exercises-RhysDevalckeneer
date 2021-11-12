'use strict';

// import Cleave
// https://www.npmjs.com/package/cleave.js
import Cleave from 'cleave.js';
require('cleave.js/dist/addons/cleave-phone.be');

import data from 'course.json';

window.onload = function () {
    console.log('Loaded');

    var name = new Cleave ('.name', {
        numeral: false,
        uppercase: true
    });

    var birthdate = new Cleave ('.birthdate', {
        date: true,
        delimiter: '-',
        datePattern: ['d','m','Y']
    });

    const ctx = document.getElementById('myChart').getContext('2d');
    const cfg = {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb'],
            datasets: [{
                label: 'Net sales',
                data: data,
                parsing: {
                    yAxisKey: 'net'
                }
            }, {
                label: 'Cost of goods sold',
                data: data,
                parsing: {
                    yAxisKey: 'cogs'
                }
            }, {
                label: 'Gross margin',
                data: data,
                parsing: {
                    yAxisKey: 'gm'
                }
            }]
        },
    };

}



