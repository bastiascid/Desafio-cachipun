

  const posibilities = ['piedra', 'papel', 'tijeras'];
  const p1 = option.getElementById("player1").value;
  const p2 = posibilities[Math.floor(Math.random() * posibilities.length)];


function play() {

  while (veces < juego) {
    juego = veces - 1;

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
