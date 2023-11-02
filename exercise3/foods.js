"use strict"

function calculatesubtotal(orders) {
    let sum = 0;
    let numorders = orders.length;
    for (let i = 0; i < numorders; i++) {
        sum += orders[i].price;
    }
    return sum;
}

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

    let mealcost = calculatesubtotal(lunch);
    let taxRate = 1.08
    let tipRate = 1.12
    let total = mealcost * tipRate * taxRate;
    console.log("My meal costs " + total.toFixed(2))

    let furnitureorders = [
        {item: "Lazyboy Recliner, Blue", price: 788.95 },
        {item: "Fancy dinner table", price: 654.25 },
        {item: "Sectional, brown", price: 900.99 }
    ];

    let furnituresubtotal = calculatesubtotal(furnitureorders)
    console.log(furnituresubtotal)