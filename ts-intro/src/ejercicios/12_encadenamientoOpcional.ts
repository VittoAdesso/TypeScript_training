interface Passenger{
    name: string;
    songs?: string[]; // opcional 
}

const passenger1: Passenger = {
    name: 'Fer'
}

const passenger2: Passenger = {
    name: 'Ann',
    songs: ['Aquiles']
}

function printSons( passenger: Passenger ) : void{
    const manyChilds = passenger.songs?.length || 0; // si hay hijos dame el # sino, dame 0
    console.log(manyChilds);    
}

printSons( passenger1); 