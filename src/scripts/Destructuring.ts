interface Player {
    volume: number;
    second: number;
    song: string;
    details: Details
}

interface Details {
    author: string;
    year: number;
}

const player: Player = {
    volume: 90,
    second: 35,
    song: 'You',
    details: {
        author: 'Sinatra',
        year: 2015
    }
}

console.log('Volume: ' + player.volume);
console.log('Second: ' + player.second);
console.log('Song: ' + player.song);
console.log('Author: ' + player.details.author);
console.log('Year: ' + player.details.year);

const food: string[] = ['Meat', 'Vegetables', 'Fish'];

console.log('Food 1: ' + food[0]);
console.log('Food 2: ' + food[1]);
console.log('Food 3: ' + food[2]);

interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia',
    price: 150
}

const tablet: Product = {
    description: 'iPad',
    price: 450
}

function calcTax(products: Product[]): number {
    let total = 0;

    products.forEach((product) => {
        total += product.price;
    })

    return total * 0.15;
}

const items = [phone, tablet];

const tax = calcTax(items);

console.log('Tax: ', tax);