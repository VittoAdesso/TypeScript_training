import { Product } from "./interfaces";

// return an array of results
export function calcIvac1( products: Product[]): [number, number]{
    let total = 0; 

    products.forEach( ({ prices }) => {
        total += prices;
    })
    // return an array of results
    return [total, total * 0.15];
}