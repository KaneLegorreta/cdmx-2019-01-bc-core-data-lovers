//hace referencía al elemento por su ID
//aquí coloco las constantes de ambito global
const showPokemons = document.getElementById('showPokemons');
const root = document.getElementById('root');
const cajitas = document.getElementsByClassName('cajitas');
const dataPokemon = window.POKEMON.pokemon;


//imprime la data en div´s
const printData = (data) => {
  //elemento innerHTML reemplaza el contenido de "root" con una cadena vacía
   root.innerHTML = '';
   //ejecuta la función una vez por cada elemento del array7
  data.forEach(pokemon => { 
    //imprime en um contenedor el nombre, imagen y número y la data en parrafos
    let namePokemon = ` <div class="cardData"> <h1> ${pokemon.name} </h1> <img = class "imageBox" src ="${pokemon.img}">  <h2> ${pokemon.num} </h2> 
    <p> TYPE: ${pokemon.type} </p>
    <p> HEIGHT:${pokemon.height}</p>
    <p>WEIGHT:${pokemon.weight}</p>
    <p>WEAKNESSES:${pokemon.weaknesses}</p> 
    </div>
    `
  //inserta como HTML antes de termindr
    root.insertAdjacentHTML("beforeend", namePokemon);

  })
}

//for declara la variable "i" y comienza en posición 0.  Evalúa si "i" es menor que cajitas,
  // y suma a "i"  1 después de cada iteración al bucle.
for (let i = 0; i < cajitas.length; i++) {
  //evento que pinta todos los pokemon por elemento
  cajitas[i].addEventListener('click', () => {
    let elementPokemon = cajitas[i].id;
    let pokemonType = window.pokemon.filterPokemons(dataPokemon, elementPokemon);
    printData(pokemonType);

  });


}

//Pinta todos los pokemon al hacer click a "todos los pokemon"
showPokemons.addEventListener("click",() => {
   printData(dataPokemon)
})




