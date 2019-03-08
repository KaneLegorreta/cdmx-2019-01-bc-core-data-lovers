window.pokemon = {
  filterPokemons: (dataPokemon, elementPokemon) => {
    return dataPokemon.filter(pokemon => {
      for (let i = 0; i < pokemon.type.length; i++) {
        if (pokemon.type[i] === elementPokemon) {
          return true
        }
      }
    });

  }

  //esta ultima llave no borrarla es la que cierra todo
}
