import Pokecard from "./Pokecard.js";

/**
 * Is provided, via props, an array of objects describing different 
 * pokemon, and renders a sequence of Pokecard components.
 * 
 * @param {List} pokemons, list of Pokemon Objects
 * [ {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
 * ... ]
 */

function Pokedex(pokemons) {
  return (
  <div className="Pokedex">
    {pokemons.map(pokemon => Pokecard(pokemon))}
  </div>
  );
}


export default Pokedex; 