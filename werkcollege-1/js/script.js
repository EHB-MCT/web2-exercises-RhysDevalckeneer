"use strict";

window.onload = function () {
    console.log('Window is fully loaded!');

    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();
        console.log('clicked!');

        // Get input values
        let customerName = document.getElementById('name').value;
        let customerEmail = document.getElementById('email').value;
        let customerOrder = document.getElementById('order').value;

        let order = {
            customerName: customerName,
            customerEmail: customerEmail,
            customerOrder: customerOrder,
            printOrder: function () {
                return `The order for the customer <strong>${this.customerName}</strong> is the following: <strong>${this.customerOrder}</strong>.<br />The customer may be notified by email: <strong>${this.customerEmail}</strong>`;
            }
        }

        console.log(customerEmail, customerName, customerOrder);

        // Remove form & display order
        document.getElementById("form").style.display = "none";
        document.getElementById('displayOrder').innerHTML = order.printOrder(customerEmail, customerName, customerOrder);
    });

}
