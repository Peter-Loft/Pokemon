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
  console.log("in Pokedex fn, line 13 pokemons = ", pokemons);
  return (
    <div className="Pokedex row">
      {pokemons.map(pokemon => (<Pokecard
        id={pokemon.id}
        name={pokemon.name}
        type={pokemon.type}
        base_experience={pokemon.base_experience} />))}
    </div>
    //don't call Pokecard in the map; again we NEVER call a component ourselves like a fn; have React do it and pass in props with {}
    //we're more RENDERING them
  );
}


export default Pokedex; 