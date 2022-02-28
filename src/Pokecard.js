
/** Shows a single Pokemon, with their name, image, and type.
 * accepts object: 
 * {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62}
 * 
 * returns HTML for card.
 */
function Pokecard({id, name, type, base_experience}) {
  const img_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div>
      <h3>
        {name}
      </h3>
      <img src = {img_url} alt= {`This is ${name}`} />
      <p>
        {`Type: ${type}`}
      </p>
      <p>
        {`EXP: ${base_experience}`}
      </p>
    </div>
  );
}

export default Pokecard;