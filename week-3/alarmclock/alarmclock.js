// need to get the input

const timeInput = document.getElementById("alarmSet");
const timeOutput = document.getElementById("timeRemaining");
console.log(timeInput.value);

function setAlarm() {
  console.log(timeInput.value);
  var minutes = Math.trunc(timeInput.value / 60);
  var seconds = Math.trunc(timeInput.value % 60);
  console.log(minutes);
  console.log(seconds);
  let stringMinutes;
  let stringSeconds;

  if (minutes < 10) {
    stringMinutes = `0${minutes}`;
  } else {
    stringMinutes = `${minutes}`;
  }
  if (seconds < 9) {
    stringSeconds = `0${seconds}`;
  } else {
    stringSeconds = `${seconds}`;
  }

  timeOutput.innerText = `Time remaining: ${stringMinutes}:${stringSeconds}`;
  return { minutes, seconds };
}

let globalMinutes, globalSeconds;

function updateGlobalVariables() {
  const time = setAlarm(); // Call the function and get the returned object
  globalMinutes = time.minutes;
  globalSeconds = time.seconds;

  console.log("Global variables updated:", globalMinutes, globalSeconds);
}

function startCountdown(sec, min) {
  while (sec > 0)
    while (sec > 0) {
      sec -= 1;

      setInterval(() => {
        setAlarm();
      }, 1000);
    }

  if (min > 0) {
    sec = +60;

    min = -1;
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
    startCountdown(globalSeconds, globalMinutes);
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
