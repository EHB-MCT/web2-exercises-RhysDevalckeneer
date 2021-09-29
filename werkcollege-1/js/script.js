"use strict";

window.onload = function () {
    console.log('Window is fully loaded!');

    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();
        console.log('clicked!');

        let customerName = document.getElementById('name').value;
        let customerEmail = document.getElementById('email').value;
        let customerOrder = document.getElementById('order').value;

        console.log(customerEmail, customerName, customerOrder);

        // Remove form & display order
        document.getElementById("form").style.display = "none";
        document.getElementById('displayOrder').innerHTML = `The order for the customer <strong>${customerName}</strong> is the following: <strong>${customerOrder}</strong>.<br />The customer may be notified by email: <strong>${customerEmail}</strong>`;
    });
}
