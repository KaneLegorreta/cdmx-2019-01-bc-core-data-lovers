window.pokemon = {
  filterPokemons:(dataPokemon, elementPokemon) =>{

    dataPokemon.forEach(pokemon => {
      let typePokemon = pokemon.type[0]
      if( typePokemon === elementPokemon ){
        console.log(pokemon)
      }
    })



// let namePokemon = `<div class="container"> <h1> num </h1> <h2> ${name} </h2>;
//  <div> <img = class "imageBox" src =${img}> </div>
// <p> TYPE: ${type} </p>
//  <p>HEIGHT:${height}</p>
//  <p>WEIGHT:${weight}</p>
//  <p>CANDY:${candy}</p>
//  <p>CANDY COUNT:$ {candy_count}</p>
//  <p>EGG: ${egg}</p>
//  <p>SPAWN CHANCE: $ {spawn_chance}</p>
//  <p>AVERANGE SPAWNS: $ {avg_spawns}</p>
//  <p>SPAWN TIME:${spawn_time}</p>
//  <p>MULTIPLIERS:${multipliers}</p>
//  <p>WEAKNESSES:${weaknesses}</p>`
//  pokemons.insertAdjacentHTML("beforeend",namePokemon);
// };
