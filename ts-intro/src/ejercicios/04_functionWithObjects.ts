
interface PlayerLOR {
    name: string;
    pv: number; 
    showHp: () => void; // to define 
}

// dont want to return anything
function livePotions( player: PlayerLOR, livePotion: number ) : void {
    player.name += livePotion;
    console.log( player );
}

function liveMorePotions( player: PlayerLOR, livePotion: number ) : void {
    player.name += livePotion;
}

// const or object type person
const newPlayer : PlayerLOR = {
    name: 'Spiderman', 
    pv: 100,
    showHp() { 
        console.log('Points of live', this.pv)
    }
}

liveMorePotions( newPlayer, 20 )
newPlayer.showHp();