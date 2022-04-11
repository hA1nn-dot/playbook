/*
  export default nos permite exportar esta clase e importara

  import className from './className.js'
*/

export default class Pokemon {
  constructor(pokemonName) {
    this.name = pokemonName;
  }

  sayHello = (message) => {
    console.log(`Mi pokemon ${this.name} te saluda!!`);
  };
}
