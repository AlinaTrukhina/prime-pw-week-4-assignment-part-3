console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// create basket
const basket = [];

// creat function to add items to basket
function addItem(item) {
    basket.push(item);
    return true;
}

console.log('test addItem', addItem('cucumber'));
console.log(basket);