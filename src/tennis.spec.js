import Tennis from "./tennis";

describe("Tennis",() => {
  it("deberia mostrar Love - Love cuando ningun jugador anoto", () => {
    let tennis = new Tennis();
    expect(tennis.obtenerScore()).toEqual("Love - Love");
  });
describe("Tennis",() => {
  it("deberia mostrar 15 - Love cuando ningun jugador anoto", () => {
    let tennis = new Tennis();
    tennis.jugador1Anoto();
    expect(tennis.obtenerScore()).toEqual("15 - Love");
  });
  it("deberia mostrar 30 - Love cuando el jugador 1 anota 2 veces", () => {
    let tennis = new Tennis();
    tennis.jugador1Anoto();
    tennis.jugador1Anoto();
    expect(tennis.obtenerScore()).toEqual("30 - Love");
  });
  it("deberia mostrar 40 - Love cuando el jugador 1 anota 3 veces", () => {
    let tennis = new Tennis();
    tennis.jugador1Anoto();
    tennis.jugador1Anoto();
    tennis.jugador1Anoto();
    expect(tennis.obtenerScore()).toEqual("40 - Love");
  });
});
});