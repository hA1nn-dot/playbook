const Ajolonauta = require("./../app/Ajolonauta");

describe("Pruebas de unidad de Ajolonauta", () => {
  test("Caso de Pruebas 1: Creación de un objeto Ajolonauta", () => {
    //Codigo a utilizar
    const woopa = new Ajolonauta("woopa");

    //Validar valor esperado
    expect(woopa.name).toBe("woopa");
  });
});
