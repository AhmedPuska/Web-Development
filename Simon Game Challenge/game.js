let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];


$(".btn").click(function() {

  let userChosenColour = this.id;
  userClickedPattern.push(this.id);
  //console.log(userClickedPattern);
  // let userChosenColour = $(e.target.id);
  // userClickedPattern.push(userChosenColour);
  // console.log(e.target.id);
  //
  // console.log(userClickedPattern);

  playSound(userChosenColour);

  animatePress(this.id);

  console.log(userClickedPattern.length - 1);
  checkAnswer(userClickedPattern.length - 1);
  // const audio = new Audio("sounds/" + $(this).attr("id") + ".mp3");
  // audio.play();
  // $(".btn").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
});



// let randomChosenColour = buttonColours[nextSequence()];

// gamePattern.push(randomChosenColour);

function nextSequence() {
  userClickedPattern = [];
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
  level++;
  $("h1").text("Level " + level);

}

// $("#" + randomChosenColour).click(function() {
//
//   // const audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   // audio.play();
//   $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// });
// $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);




function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}



function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  // $("#" + currentColour).toggleClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
    // $("#" + currentColour).toggleClass("pressed");
  }, 100);
}

let started = false;
let level = 0;


$(document).keypress(function(event) {
  if (!started) {
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }
});


function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success");
    if (userClickedPattern.length === gamePattern.length) {

      setTimeout(function() {
        nextSequence();
      }, 1000);

    }

  } else {
    console.log("Wrong");

    const audio = new Audio("sounds/" + "wrong" + ".mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    },200)
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}


ca
function startOver() {
  started = false;
  level = 0;
  gamePattern=[];
}
