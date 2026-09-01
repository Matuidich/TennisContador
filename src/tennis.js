  class Tennis{ 
    constructor(){
        this.jugador1 = 0;
        this.jugador2 = 0;
    }

    obtenerScore(){
        return "Love - Love"
    }
    jugador1Anoto(){
        this.jugador1++;
    }
    jugador2Anoto(){
        this.jugador2++;
    }
  }
   
  export default Tennis;