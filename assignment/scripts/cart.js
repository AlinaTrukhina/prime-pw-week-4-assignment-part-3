console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// create basket
const basket = [];
const maxItems = 5;

// create function to add items to basket
function addItem(item) {
//    item.toString();
    if (isFull(basket) === false){
        basket.push(item);
        return true;
        } else {
        console.log('No room!');
        return false;
        }
} 

//test function
console.log('test addItem - expect true', addItem('cucumber'));
// console.log(bread) - expect error; this returns an error saying bread is not defined.
console.log('test addItem', addItem('tomato'));
console.log('test addItem', addItem('onion'));
console.log(basket);

// create function to list items
function listItems(basket) {
    for (let n in basket) {
        console.log(basket[n]);
    }  return false;
        
}

// test listItems
listItems(basket);
console.log(listItems(basket));

// create function to empty

function empty() {
    while (basket.length) {
        basket.pop();
    } 
    console.log('basket emptied');
}

// test function "empty"

empty();
console.log(basket);

// create isFull function
/*
function isFull() {
    return ((basket.length < maxItems) ? false : true);
}
*/

function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
        }
}


// test isFull 

console.log('test isFull - expect false', isFull());

// fill basket back up
console.log('test addItem - expect true', addItem('cucumber'));
console.log('test addItem', addItem('tomato'));
console.log('test addItem', addItem('onion'));
console.log('addItem', addItem('sour cream'));
console.log('addItem', addItem('dill'));

// check # of items
console.log(listItems(basket));

// see if the addItems function will add items if basket is full
console.log('addItem', addItem('dill-2'));
console.log(basket.length);

console.log('test isFull - expect true', isFull());

console.log(listItems(basket));

// create function that removes item
function removeItem(item) {
    const toRemove = basket.indexOf(item);
    if (toRemove === null) {
        return null;
    } else {
        basket.splice(toRemove,1);
        return 'removed ' + item;
    }
}

// test removeItem

console.log('test removeItem - expect removed onion:', removeItem('onion'));
console.log(basket);