function name() {
  var pl1 = prompt("Igrac 1 unesite Vase ime");
  var pl2 = prompt("Igrac 2 unesite Vase ime");
  if (pl1.length == 0) {
    pl1="Player 1";
  } if(pl2.length == 0) {
    pl2="Player 2";
  }
  document.querySelectorAll("div p")[0].textContent = pl1;
  document.querySelectorAll("div p")[1].textContent = pl2;

  winner();
}

function player1() {
  let random = Math.floor(Math.random() * 6);
  let plus = random + 1;
  document.querySelector("div img").setAttribute("src", "images/dice" + plus + ".png");
  console.log("Player 1 = " + plus);
  return plus;
}

function player2() {
  let random = Math.floor(Math.random() * 6);
  let plus = random + 1;
  document.querySelectorAll("div img")[1].setAttribute("src", "images/dice" + plus + ".png");
  console.log("Player 2 = " + plus);
  return plus;
}

var p1 = player1();
var p2 = player2();


function winner() {
  if (p1 > p2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
    console.log("Player1 is bigger number");
  } else if (p1 < p2) {
    document.querySelector("h1").textContent = "Player 2 wins!";
    console.log("Player2 is bigger number");
  } else {
    document.querySelector("h1").textContent = "It's draw Play Again!";
    console.log("play again");
  }
}

name();
