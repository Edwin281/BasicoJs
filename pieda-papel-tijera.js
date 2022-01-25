var piedra = "piedra";
var tijera = "tijera";
var papel = "papel";
cpu =Math.random() * (3 - 1) + 1;

function juego (jugador,cpu){

    if(jugador === cpu){
    console.log("empate");
    }else if(jugador === piedra && cpu === papel || jugador === tijera && cpu === piedra ) {
        console.log("La cpu gano con"+ cpu)

    }


}