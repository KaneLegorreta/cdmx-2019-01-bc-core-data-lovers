window.pokemon = {
  filterPokemons: (dataPokemon, elementPokemon) => {
    return dataPokemon.filter(pokemon => {
      // let typePokemon = pokemon.type[0]
      for (let i = 0; i < pokemon.type.length; i++) {
        if (pokemon.type[i] === elementPokemon) {
          return true
        }
      }
    });

  },

ordenarPorNombre :  (pokemonArray) => {
  const sortName =
  pokemonArray.sort( (prev, next) =>  {
    if (prev.name > next.name) {
      return 1;
    }else if  (prev.name < next.name) {
        return -1;
      }else{
      return 0;
    }

  });
  return sortName



  },
  totalWeightPokemon: (pokemonArray) => {
    const pokemonTotalWeight = pokemonArray.reduce((total, dataPokemon) => {
      return total += parseFloat(dataPokemon.weight);
    }, 0)
    return pokemonTotalWeight;
  },



  //Esta función filtra por letra que conincide, guarda el valor de la palabra y lo busca en la data (puse una coma en la linea de arriba)

  //  filterSearch: (dataPokemon, filterFirstLetra) => {

    //  const pokeFiltrado = dataPokemon.filter(dataPokemon => (dataPokemon.name.toLowerCase().match(Value.toLowerCase())));
      //return pokeFiltrado;
    //}


    //la funcion para filtrado por letra emul
      //  filterPokemons: (dataPokemon, elementPokemon) => {
        //  return dataPokemon.filter(pokemon => {
            // let typePokemon = pokemon.type[0]
          //  for (let i = 0; i < pokemon.type.length; i++) {
            //  if (pokemon.type[i] === elementPokemon) {
              //  return true
              //}
            //}
          //});

        //},

  //funcion en prueba filtrado por letra que coincide



  //esta ultima llave no borrarla es la que cierra todo
}
