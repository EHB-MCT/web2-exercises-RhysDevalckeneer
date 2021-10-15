"use strict";

// Dishes array
let dishes = [
    {
        "id": 1,
        "name": "Big Kahuna Burger",
        "price": 12
    },
    {
        "id": 2,
        "name": "Royal with Cheese",
        "price": 8
    },
    {
        "id": 3,
        "name": "Jack Rabbit Slim's $5 Shake",
        "price": 5
    },
];

let changeLocation = () => {
    window.location.href = "./"
}

window.onload = function () {
    console.log('Window is fully loaded!');

    // Loop over array data
    for (let dish of dishes) {
        console.log(dish);

        document.getElementById('dishes').insertAdjacentHTML('beforeend', `
        <input type="radio" id="${dish.id}" name="dish" value="${dish.name}">
        <label label for= "dish">${dish.name}</label ><br>`);
    }

    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();
        console.log('clicked!');

        // Get input values
        let customerName = document.getElementById('name').value;
        let customerEmail = document.getElementById('email').value;
        // Get value from the checked radio button
        let customerOrder = document.querySelector('input[name="dish"]:checked').value;

        console.log(customerEmail, customerName, customerOrder);

        // Returns order
        let printOrder = () => {
            return `The order for the customer <strong>${customerName}</strong> is the following: <strong>${customerOrder}</strong>.<br />The customer may be notified by email: <strong>${customerEmail}</strong>
            <button id="anotherOrder" onClick="changeLocation();">Place another order</button>`;
        }

        

        

        // Remove form & display order
        document.getElementById("form").style.display = "none";
        document.getElementById('displayOrder').innerHTML = printOrder(customerEmail, customerName, customerOrder);
    });
}
