

let habilities : string[] = ['Aquiles', 'Counter', 'Healing'];

interface Player {
    name: string;
    hp: number;
    habilities: string[];
    born?: string; // is optional 
}
const player: Player = {
    name: 'Hulk',
    hp: 1000, 
    habilities: ['push', 'strong', 'climb'],
}

player.born = 'Katia';


console.table( player ); 