import Jugador from "./jugador.js"


class Main {
    constructor() {

        document.getElementById('uno').addEventListener('click',()=>{
            let jugador1 = new Jugador('Eduardo');
            let jugador2 = new Jugador('Teresa');
            
            console.log(jugador1._turno());
            
            console.log(jugador2._turno());
            
            if(jugador1._posicion > jugador2._posicion){
                console.log(`Gano el jugador: ${jugador1.nombre}, ¡felicidades!.`);
            }else{
                console.log(`Gano el jugador: ${jugador2.nombre}, ¡felicidades!. `);
            }
                        
        })



}


}
let m = new Main()
