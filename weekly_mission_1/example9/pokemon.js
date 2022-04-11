class Pokemon {
  constructor(pokemonName) {
    this.name = pokemonName;
  }

  sayHello = (message) => {
    console.log(`Mi pokemon ${this.name} te saluda!!`);
  };

  sayMessage = (message) => {
    console.log(`Mi pokemon ${this.name} dice: ${message}`);
  };
}

/*
Exportar la clase con module
Para que se pueda usar en el archivo main.js
*/
module.exports = Pokemon;
