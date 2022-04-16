class Pokemon {
  constructor(pokemonName) {
    this.name = pokemonName;
  }

  sayHello = () => {
    console.log(`Mi pokemon ${this.name} te saluda!!`);
  };

  sayMessage = (message) => {
    console.log(`Mi pokemon ${this.name} dice: ${message}`);
  };
}

/*
Version de modularizacion de CommonJS
Exportar la clase con module
Para que se pueda usar en el archivo main.js
*/
module.exports = Pokemon;
