const btngetName = document.getElementById('next');
const trainerName = document.getElementById('nombre');
const bienvenido = document.getElementById('nombre-bienvenido');
const sectionName = document.getElementById('pantalla1');
const pantalla2 = document.getElementById('pantalla2');
const showPokemons = document.getElementById('showPokemons');
const root = document.getElementById('root');
const cajitas = document.getElementsByClassName('cajitas')
const dataPokemon = window.POKEMON.pokemon;
const forWeight = document.getElementById('forWeight');




//const Water = document.getElementById('Water');
//const Flying = document.getElementById('Flying');
//const nombre = document.querySelector('#nombre')
//const boton = document.querySelector('#boton')
// const nombre= document.getElementById('next');
// const pantalla1=document.getElementById('pantalla1');
//
//
// Estoy creando la funcion de mi boton GO, para que al darle click me pinte el resultado del input en pantalla 2
//


//const Water = document.getElementById('Water');
//const Flying = document.getElementById('Flying')


btngetName.addEventListener("click", () => {


  bienvenido.innerHTML = '¡Bienvenido entrenador!';
  sectionName.style.display = "none";
  pantalla2.style.display = "block"
})

const printData = (data) => {
  root.innerHTML = '';

  data.forEach(pokemon => {
    let namePokemon = `<figure class="tarjeta"> <h1> ${pokemon.num} </h1> <h2> ${pokemon.name} </h2>    <div> <img = class "imageBox" src ="${pokemon.img}"> </div>
    <p> TYPE: ${pokemon.type} </p>
    <p>HEIGHT:${pokemon.height}</p>
    <p>WEIGHT:${pokemon.weight}</p>
    <p>CANDY:${pokemon.candy}</p>
    <p>CANDY COUNT:${pokemon.candy_count}</p>
    <p>EGG: ${pokemon.egg}</p>
    <p>SPAWN CHANCE: ${pokemon.spawn_chance}</p>
    <p>AVERANGE SPAWNS: ${pokemon.avg_spawns}</p>
    <p>SPAWN TIME:${pokemon.spawn_time}</p>
    <p>MULTIPLIERS:${pokemon.multipliers}</p>
    <p>WEAKNESSES:${pokemon.weaknesses}</p> </figure>
    `

    root.insertAdjacentHTML("beforeend", namePokemon);

  })
}


for (let i = 0; i < cajitas.length; i++) {
  cajitas[i].addEventListener('click', () => {
    let elementPokemon = cajitas[i].id;
    let pokemonType = window.pokemon.filterPokemons(dataPokemon, elementPokemon);
    window.pokemon.ordenarPorNombre(pokemonType);
    printData(pokemonType);

  });


}

forWeight.addEventListener("click",() => {
  const pokemonTotalPeso =  window.pokemon.totalWeightPokemon(dataPokemon);
  root.innerHTML= pokemonTotalPeso;




});


showPokemons.addEventListener("click",() => {
   printData(dataPokemon)

})



// función de buscador nombre , coincide letra y nombre que escribes



//searchBtn.addEventListener("click", () => {

  //const searchInput = filterFirstLetra.value;
  //searchInput.style.display = "none";
  //pantalla2.style.display = "block"
  //let searchName = document.getElementById("search-input").value;
  //printData(window.pokemon.filterFistLetra(dataPokemon, searchName));
  //});
//}

//filterSearchName();

//  imprime
