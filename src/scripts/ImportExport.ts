import {calcTax, Product} from "./Destructuring";

const shoppingCart: Product[] = [
    {
        description: 'iPhone',
        price: 500
    },
    {
        description: 'Watch',
        price: 200
    }
];

console.log('Tax: ' + calcTax(shoppingCart));
