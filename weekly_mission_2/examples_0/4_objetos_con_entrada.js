//Ejemplo 4: Crear un objeto que reciba parámetros
const myObject = {
  name: "Haim",
  sendMessage: function (message) {
    console.log(`Nombre: ${this.name}\nMessage: ${message}`);
  },
};
console.log("Ejemplo 3: Crear un objeto que reciba parametros");
console.log(myObject.sendMessage("This is so AWESOMEEE!!")); //string parameter
