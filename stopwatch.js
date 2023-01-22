let InitialTime;
let timeElapsed = 0;
let stopwatchId;
let isReset=false;
var audio = new Audio("./Sounds/tick.mp3");


//function to initialize stopwatch
function start() {
    audio.play();
    InitialTime = Date.now();
    stopwatchId = setInterval(updateStopWatch, 10);
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;
    document.getElementById("resetBtn").disabled = true;
}

//function to stop the timer
function stop() {
    clearInterval(stopwatchId);
    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("resetBtn").disabled = false;
    audio.pause();
}

//function to reset stopwatch 
function reset() {
    isReset=true;
    stop();
    updateStopWatch();
    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("resetBtn").disabled = true;
}
//function to update stopwatch
function updateStopWatch() {
    let time = Date.now();
    if(isReset)
    timeElapsed = 0;
    else
    timeElapsed += (time - InitialTime) / 1000;
    InitialTime = time;
    displayStopWatch(timeElapsed);
    isReset=false;
}

//function to display time
function displayStopWatch(time) {
    let minutes = addZeroes(Math.floor(time / 60));
    let seconds = addZeroes(Math.floor(time % 60));
    let milliseconds = addZeroes(Math.floor((time * 1000) % 1000), 3);
    let strTime = minutes + ":" + seconds + ":" + milliseconds;
    document.getElementById("stopwatch").innerHTML = strTime;
}


//function to add zeroes before seconds, minutes, and milliseconds
function addZeroes(num, size = 2) {
    let s = "000000000" + num;
    return s.substring(s.length - size);
}


