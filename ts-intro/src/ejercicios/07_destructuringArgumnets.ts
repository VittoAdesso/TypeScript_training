// destructuring arguments

interface Products{
    description: string;
    price: number;
}

const phone: Products = {
    description: 'Samsung',
    price: 500,
}

const tablet: Products = {
    description: 'Ipad',
    price: 600,
}

// normal way
function calcIvac( products: Products[]): number {
    let total = 0; 

    products.forEach( (article) => {
        total += article.price;
    })
    return total * 0.15;
}

const articleShop = [ phone, tablet]; 
const iva = calcIvac( articleShop );

console.log( 'Iva', iva); 

// destructuring arguments

function calcIvac1( products: Products[]): number {
    let total = 0; 

    products.forEach( ({price}) => {
        total += price;
    })
    return total * 0.15;
}

const articleShop1 = [ phone, tablet]; 
const iva1 = calcIvac1( articleShop1 );

console.log( 'Iva', iva); 

