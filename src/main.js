// Estoy creando la funcion de mi boton GO, para que al darle click me pinte el resultado del input en pantalla 2
const btngetName = document.getElementById('next');
const trainerName = document.getElementById('nombre');
const bienvenido= document.getElementById('nombre-bienvenido');
const sectionName = document.getElementById('pantalla1');

btngetName.addEventListener ("click",() => {
const name = trainerName.value;
bienvenido.innerHTML = '¡Hola entrenador '  +  name  +' Bienvenido!';
sectionName.style.display ="none";

 })



// Estoy dando la funcion a mi boton de que al darle click me esconda los elementos de la pantalla1
document.getElementById("next").addEventListener("click", () =>{
document.getElementById("getName").style.display="none";

})

// Estoy dando la funcionalidad a mi boton Pokemones ordenados, para que me pinte data
document.getElementById("showPokemons").addEventListener("click", ()=> {
   const dataPokemon = POKEMON.pokemon;
   window.pokemon.show(dataPokemon);
})

// Estoy dando funcionalidad a mi boton de Pekemones ordenados, que me esconda la pantalla, 1 a la 2.
const data = POKEMON.pokemon
const pokemon = document.getElementById("POKEMON");



const nombre= document.getElementById('next');
const pantalla1=document.getElementById('pantalla1');
const pantalla2=document.getElementById('pantalla2');

nombre.addEventListener("click", ()=>{
 pantalla1.classList.add('hide');
 pantalla2.classList.remove('hide');
})



const dataPokemon = (name,img, type, height, weight, candy, candy_count, egg, spawn_chance, avg_spawns,
spawn_time, multipliers, weaknesses,) =>{
 const pokemons = document.getElementById("pokemons");
 let namePokemon = `<div class="container"> <h1> ${num} </h1> <h2> ${name} </h2>;
 <div> <img = class "imageBox" src =${img}> </div>
 constructor()
 <p> TYPE: ${type} </p>
 <p>HEIGHT:${height}</p>
 <p>WEIGHT:${weight}</p>
 <p>CANDY:${candy}</p>
 <p>CANDY COUNT:$ {candy_count}</p>
 <p>EGG: ${egg}</p>
 <p>SPAWN CHANCE: $ {spawn_chance}</p>
 <p>AVERANGE SPAWNS: $ {avg_spawns}</p>
 <p>SPAWN TIME:${spawn_time}</p>
 <p>MULTIPLIERS:${multipliers}</p>
 <p>WEAKNESSES:${weaknesses}</p>`
 pokemons.insertAdjacentHTML("beforeend",namePokemon);


};


data.forEach(element =>{
 let num = element.num;
 let name = element.name;
 let img = element.img;
 let type = element.type;
 let height = element.height;
 let weight = element.weight;
 let candy = element.candy;
 let candy_count= element.candy_count;
 let egg = element.egg;
 let spawn_chance = element.spawn_chance;
 let avg_spawns = element.avg_spawns;
 let spawn_time = element.spawn_time;
 let multipliers = element.multipliers;
 let weaknesses = element.weaknesses;
 data(num, name, img, type, height, weight, candy, candy_count, egg, spawn_chance, avg_spawns, spawn_time, multipliers,
  weaknesses);
})
