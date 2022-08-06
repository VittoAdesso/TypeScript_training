// normal class 
class Heroe {
    alterEgo: string;
    age: number; 
    realName: number; 

    printName() {
        return this.alterEgo + ' ' + this.realName;
    }
}

const ironman = new Heroe();
console.log(ironman);


// constructor 

class Hero2 {
    constructor( public name: string,
                public age: number,
                public realName: string
                ) {}
}

const avenger = new Hero2('Hulk', 29, 'Bra');
console.log(avenger); 

// extends a class 

class Players {
    constructor( public name: string,
                public adress: string
                ) {}
}

class Heroe1 extends Players {
    constructor( public name: string,
        public age: number,
        public realName: string
        ) {
            super('Aqua', 'Ocean'); 
        }

}

const avengers = new Hero2('Hulk', 29, 'Bra');
console.log(avengers); 