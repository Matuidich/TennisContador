  class Tennis{ 
    constructor(){
        this.jugador1 = 0;
        this.jugador2 = 0;
    }

    obtenerScore(){
         if (this.jugador1 === 1) {
        return "15 - Love";
        }
        if (this.jugador1 === 2) {
            return "30 - Love";
        }
        if (this.jugador1 === 3) {
            return "40 - Love";
        }
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