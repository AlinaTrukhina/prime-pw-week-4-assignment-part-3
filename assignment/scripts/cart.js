console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// create basket
const basket = [];

// create function to add items to basket
function addItem(item) {
    item.toString();
        basket.push(item);
        return true;
    } 

//test function
console.log('test addItem', addItem('cucumber'));
console.log(bread);
console.log(basket);

// create function to list items