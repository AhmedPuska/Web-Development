// Detecting Button Press
var buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let getText = this.innerHTML;
    playSound(getText);
    buttonAnimation(getText);
  });
}

// Detecting Keyboard Press

document.addEventListener("keydown", function(k) {
  var getKey = k.key;
  playSound(getKey);
  buttonAnimation(getKey);
});

function playSound(play) {
  switch (play) {
    case 'w':
      var soundW = new Audio("sounds/tom-1.mp3");
      soundW.play();
      break;
    case 'a':
      var soundA = new Audio("sounds/tom-2.mp3");
      soundA.play();
      break;
    case 's':
      var soundW = new Audio("sounds/tom-3.mp3");
      soundW.play();
      break;
    case 'd':
      var soundW = new Audio("sounds/tom-4.mp3");
      soundW.play();
      break;
    case 'j':
      var soundW = new Audio("sounds/crash.mp3");
      soundW.play();
      break;
    case 'k':
      var soundW = new Audio("sounds/kick-bass.mp3");
      soundW.play();
      break;
    case 'l':
      var soundW = new Audio("sounds/snare.mp3");
      soundW.play();
      break;
    default:
      console.log(play);
  }
}

function buttonAnimation(currentKey) {
  // var activeButton = document.querySelector("." + currentKey).classList.toggle("pressed");
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  },100);
}


//
