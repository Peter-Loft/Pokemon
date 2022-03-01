import Pokecard from "./Pokecard.js";

/**
 * Is provided, via props, an array of objects describing different 
 * pokemon, and renders a sequence of Pokecard components.
 * 
 * @param {List} pokemons, list of Pokemon Objects
 * [ {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
 * ... ]
 */

function Pokedex({ pokemons }) {
  return (
    <div className="Pokedex">
      {pokemons.map(pokemon => (<Pokecard
        id={pokemon.id}
        name={pokemon.name}
        type={pokemon.type}
        base_experience={pokemon.base_experience} />))}
    </div>
  );
}


export default Pokedex; 