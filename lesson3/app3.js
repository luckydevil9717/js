'use strict'
const products1 = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products1.forEach(element => {
    element.price = (element.price - element.price * 0.15);

})
console.log(products1);