//Ejemplo 4: Crear un objeto con metodos
const foo = {
  name: "Haim",
  sayHello: function () {
    console.log(`Te ha saludado ${this.name}`);
  },
};
console.log("Ejemplo 3: Crear un objeto con metodos");
console.log(foo.sayHello());
