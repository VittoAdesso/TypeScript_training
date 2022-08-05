// one way 
interface Heroe{
    name: string;
    age: number;
    // objetos aninadados
    adress: { street: string, 
            country: string,
            city: string};
    showAdress: () => string; 
}

// second way
interface adressOne {
    street: string, 
    country: string,
    city: string
}

interface Heroe2{
    name: string;
    age: number;
    // objetos aninadados
    adress: adressOne;
    showAdress: () => string; 
}

const heroe: Heroe = {
    name: 'Spiderman',
    age: 25,
    adress: {
        street: 'Main',
        country: 'United States',
        city: 'NY',
    },
    showAdress() {
        return this.name + ' ' + this.adress.street + this.adress.city;
    }
}

const adress = heroe.showAdress();
console.log(adress);

console.log(heroe.adress.country);