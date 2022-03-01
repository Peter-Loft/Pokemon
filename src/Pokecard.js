
/** Shows a single Pokemon, with their name, image, and type.
 *  @param accepts object: 
 * {id: 4, name: 'Charmander', type: 'fire', base_experience: 62}
 * 
 * returns HTML for card.
 */
function Pokecard({id, name, type, base_experience}) {
  const img_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="Pokecard col">
      <h3 className="Pokecard-name-title">
        {name}
      </h3>
      <img className = "Pokecard-img img-fluid" src = {img_url} alt= {`This is ${name}`} />
      <p className="Pokecard-type-p">
        Type: {type}
      </p>
      <p className="Pokecard-exp-p">
        {`EXP: ${base_experience}`}
      </p>
    </div>
  );
}

// line 17 originally `Type: ${type}`---but we are writing HTML! We can just open a JS space with {} within the HTML space of the <p> tag
//{} open JS portals in an HTML space

export default Pokecard;