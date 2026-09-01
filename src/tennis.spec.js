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
    expect(tennis.jugador1Anoto()).toEqual("15 - Love");
  });
});