interface Person{
    title: string;
    song: string;
    details: Details;
}

// an objetc 
interface Details{
    age: number;
    gender: string;
}

const singer: Person = {
    title: 'Willy', 
    song: 'El gran Varón', 
    details: {
        age: 2008,
        gender: 'salsa'
    }
}

// destructuring
const { title , song } = singer; 
console.log('Singer Name:', title); 
console.log('Singer song:', song); 

// to destructuring object , better way
const { details } = singer;  // also i can ==> const { name, song, details } = singer; 
const { age } = details;
console.log('Song age release:', age); 

