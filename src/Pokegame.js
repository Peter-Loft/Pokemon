import Pokedex from "./Pokedex.js";

/** Should take your list of 8 pokemon and  
 * randomly assign them into two hands of 4 cards each. 
 * It should then render two Pokedex components, one for each hand
 * 
 * @param array of pokemon info objs
 * [ {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
 * ... ]
 * @returns two Pokedex components, one for each hand
 */
function Pokegame({PokeList}){
    //poach map from Pokedex component

    //but reorder/shuffle pokemon 
    const shuffledPokemon = shuffle(PokeList);
    // console.log("shuffledPokemon: ", shuffledPokemon);

    //cut shuffled pokeArray in half to create each hand
    const firstHand = shuffledPokemon.slice(0, 4);
    const secondHand = shuffledPokemon.slice(4); 
    console.log("firstHand: ", firstHand, "secondHand: ", secondHand);
    //.slice didn't work well
   

    //call Pokedex twice, 4 cards in each Pokedex div
    return (
        <div className="Pokegame">
            <Pokedex PokeList={firstHand} />
            <Pokedex PokeList={secondHand} />
        </div>
    );
    //IT SHOULD HAVE BEEN: 
    /**
     * <div className="Pokegame">
            <Pokedex pokemons={firstHand} />
            <Pokedex pokemons={secondHand} />
        </div>
     */
    //bc the prop name for the Pokedex component is "pokemons", NOT PokeList! PokeList is the name of the prop for the Pokegame component!
}


/**Simple shuffle fn 
 * we will use to shuffle our array of Pokemon info objs
 * @param array 
 * @returns a shuffled array
 */
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    
    return array;
}


export default Pokegame;