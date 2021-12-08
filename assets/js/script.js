
var veces = prompt("ingrese cantidad de veces que quieres jugar ")

var posibilities = ['piedra', 'papel', 'tijeras'];
var p1 = document.getElementsByClassName("player1");
var p2 = posibilities[Math.floor(Math.random() * posibilities.length)];

document.write(p1,p2)

function play() {

  do {
        if (!p1) return;
    if (p1 === p2) {
      document.write('empate');
    } else if (p1 === "papel" && p2 === "piedra") {
      document.write("ganaste")
    } else if (p1 === "tijeras" && p2 === "papel") {
      document.write("ganaste")
    } else if (p1 === "piedra" && p2 === "tijeras") {
      document.write("ganaste")
    } else {
      document.write("perdiste")
    }
    veces = veces - 1;
    document.write(" este es tu juego numero :" + veces);

  } while (veces > 0);
}