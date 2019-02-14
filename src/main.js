const pokemon = document.getElementById("POKEMON");
const btngetName = document.getElementById('next');
const trainerName = document.getElementById('nombre');
const bienvenido= document.getElementById('nombre-bienvenido');
const sectionName = document.getElementById('pantalla1');
const pantalla2=document.getElementById('pantalla2');
const showPokemons = document.getElementById('showPokemons');
const root =  document.getElementById('root');
const cajitas = document.getElementsByClassName('cajitas')
const dataPokemon = POKEMON.pokemon;
// Estoy creando la funcion de mi boton GO, para que al darle click me pinte el resultado del input en pantalla 2
//
btngetName.addEventListener ("click",() => {
const name = trainerName.value;
bienvenido.innerHTML = '¡Hola entrenador '  +  name  +'. Bienvenido!';
sectionName.style.display ="none";
pantalla2.style.display  ="block"
 })

const printData = () => {
  dataPokemon.forEach( pokemon => {
    let namePokemon = `<div class="tarjeta"> <h1> ${pokemon.num} </h1> <h2> ${pokemon.name} </h2>
    <div> <img = class "imageBox" src ="${pokemon.img}"> </div>
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
    <p>WEAKNESSES:${pokemon.weaknesses}</p>
    `
    root.insertAdjacentHTML("beforeend",namePokemon);

  })
}

for(let i = 0; i< cajitas.length; i++){
  cajitas[i].addEventListener('click', () => {
    let elementPokemon = cajitas[i].id
    window.pokemon.filterPokemons(dataPokemon, elementPokemon)
  })
}

showPokemons.addEventListener('click', printData)

// // Estoy dando la funcion a mi boton de que al darle click me esconda los elementos de la pantalla1
// // document.getElementById("next").addEventListener("click", () =>{
// // document.getElementById("getName").style.display="none";
// // })
//
// Estoy dando la funcionalidad a mi boton Pokemones ordenados, para que me pinte data


//data.forEach(element =>{
 //let num = element.num;
 //let name = element.name;
 //let img = element.img;
 //let type = element.type;
 //let height = element.height;
 //let weight = element.weight;
 //let candy = element.candy;
 //let candy_count= element.candy_count;
 //let egg = element.egg;
 //let spawn_chance = element.spawn_chance;
 //let avg_spawns = element.avg_spawns;
 //let spawn_time = element.spawn_time;
 //let multipliers = element.multipliers;
 //let weaknesses = element.weaknesses;
 //data(num, name, img, type, height, weight, candy, candy_count, egg, spawn_chance, avg_spawns, spawn_time, multipliers,
  //weaknesses, );
//});
