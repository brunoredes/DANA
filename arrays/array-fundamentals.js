const toppings = ["cheese", "onion", "bacon"];

// index access - starts from 0 (first item in the array)
toppings[0] // cheese
toppings[1] // onion
toppings[2] // bacon


// add element with push() method

toppings.push("chicken"); // add a new item in the end of the list

toppings.pop(); // remove the last item in the array

toppings.unshift("peperoni") // add an element in the beginning of the array
toppings.shift() // remove an element in the beginning of the array

let numberOfToppings = toppings.length; // size of array

let index = toppings.indexOf("cheese"); // index 0. if trying search smt that is not in the array, it will return -1


for(let index = 0; index < toppings.length; index++) {
    console.log(toppings[i]);
}

for(let index = toppings.length -1; i >= 0; index--) {
    console.log(toppings[i]);
}

for(let topping of toppings) {
    console.log(topping);
}

toppings.sort().reverse(); // will order from a to z then reverse going from z to a
