import { Product } from "./interfaces";
import { calcIvac1 } from "./functionsToExports";

const cart: Product[] = [
    {
        phone: "Nokia",
        prices: 120,
    },
    {
        phone: "Huawei",
        prices: 110,
    }
]; 

const [ total, iva1 ] = calcIvac1( cart );


console.log(total);
console.log(iva1);