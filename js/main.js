console.clear();

var speed = 120;
var indexPB = speed * 60; // 60 FPS
var initialDash = 440;
var currentDash = 600;

var fps = 60;
var procent = 0;
var oneProcent = 360 / 100;
var result = oneProcent * 64;
var radius = 70;

function myFunction() {
  indexPB--;
  var percentage = getPercentage(indexPB, speed);

  timer();
  svg();
  progressBar(percentage);

  if (indexPB !== 0) {
    requestAnimationFrame(myFunction);
  }
}
requestAnimationFrame(myFunction);

function progressBar(percentage) {
  var progress = $(".progress-inner");

  progress.width(percentage + "%");
  progress.removeClass("green orange red");

  if (percentage >= 66) {
    progress.addClass("green");
    $(".circle-animation").css("stroke", "green");
  } else if (percentage < 66 && percentage > 20) {
    progress.addClass("orange");
    $(".circle-animation").css("stroke", "orange");
  } else if (percentage <= 20) {
    progress.addClass("red");
    $(".circle-animation").css("stroke", "red");
  }
}

function timer() {
  $(".timer > span").html(
    (Math.round(((indexPB * 1000) / 600 / 100) * 10) / 10).toFixed(2)
  );
}

function svg() {
  var dash = (indexPB * initialDash) / (speed * 60);
  $(".circle-animation").css("stroke-dashoffset", dash);
}

function getPercentage(current, max) {
  return (current * 100) / (max * 60);
}

function restart() {
  indexPB = speed * 60;
  myFunction();
}
