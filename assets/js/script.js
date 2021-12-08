
  var veces = prompt("ingrese cantidad de veces que quieres jugar ")

  const posibilities = ['piedra', 'papel', 'tijeras'];
  const p1 = document.getElementById("player1").selectedIndex;
  const p2 = posibilities[Math.floor(Math.random() * posibilities.length)];

function play() {

  for (let index = 0; index < veces; index++) {
    const element = array[index];
    
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
  }
}
