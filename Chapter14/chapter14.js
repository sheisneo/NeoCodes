"use strict"
// var language = prompt("What language do you speak?");
// if (language === "JavaScript") {
//  alert("Great! Let's talk JavaScript!");
// } else {
//  alert("I don't know what you're saying.");
// }
// if (speaksJavaScript) {
//     alert("It's great to meet you.");
//    }


   // listen for button clicks
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * gets form values
 * calculates prices
 * produces output
 */
function placeOrder() {
    // get form values
    var numPizzas = document.getElementById("numPizzas").value;
    var typePizza = document.getElementById("typePizza").value;
    var deliveryCity = document.getElementById("deliveryCity").value;

    // get the pizza price
    var orderPrice = calculatePrice(numPizzas, typePizza);

    // get the delivery price
    var deliveryPrice = calculateDelivery(orderPrice, deliveryCity);

    // create the output
    var theOutput = "<p>Thank you for your order.</p>";

    // todo: output the delivery price, if there is one

    theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice);

    // display the output
    document.getElementById("displayTotal").innerHTML = theOutput;
}

/**
 * calculates pizza price
 */
function calculatePrice(numPizzas, typePizza) {
    var orderPrice = Number(numPizzas) * 10;
    var extraCharge = 0;
    
    // todo: calculate extraCharge, if there is one.
    if (typePizza === "supreme") {
        extraCharge = Number(numPizzas) * 2;
        }
    orderPrice += extraCharge;
    return orderPrice;
}

/**
 * calculates delivery price
 */
function calculateDelivery(orderPrice, deliveryCity) {
    var deliveryPrice = 0;
    
    // todo: calculate delivery price, if there is one
    
    return deliveryPrice;
}