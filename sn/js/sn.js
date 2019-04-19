var totalSN = 0;
var playing = false;
var voices = [];
var leftCommand;
var rightCommand;
var snNum = 0;
var stepNum = 0;
var delayBetweenCounts;
var intervalID;
var background_music;

function preload() {
    voices.push(document.getElementById("1"));
    voices.push(document.getElementById("2"));
    voices.push(document.getElementById("3"));
    voices.push(document.getElementById("4"));
    voices.push(document.getElementById("5"));
    voices.push(document.getElementById("6"));
    voices.push(document.getElementById("7"));
    voices.push(document.getElementById("8"));
    voices.push(document.getElementById("9"));
    voices.push(document.getElementById("10"));
    voices.push(document.getElementById("11"));
    voices.push(document.getElementById("12"));
    rightCommand = document.getElementById("right");
    rightCommand.volume = 0.5;
    leftCommand = document.getElementById("left");
    leftCommand.volume = 0.5;

    background_music = document.getElementById("background_music");
    background_music.loop = true;
    background_music.play();
}

function bgMusicPlay() {
    var bgMusic = document.getElementById("bg_music_cb");
    if (bgMusic.checked) {
        background_music.volume = 0.1;
        background_music.play();
    } else {
        background_music.pause();
    }
}

function play_pause() {
    delayBetweenCounts = calculateDelayBetweenCounts()
    bgMusicPlay();
    totalSN = document.getElementById("totalSN").value;
    var playBtn = document.getElementById("play_pause_btn");
    var stopBtn = document.getElementById("stop_btn");
    if (playing) {
        playBtn.value = "Play";
        clearInterval(intervalID);
    } else {
        playBtn.value = "Get Ready...";
        playBtn.disabled = true;
        stopBtn.disabled = true;
        console.log("Waiting...");

        // If the delay is smaller than delay between counts do not wait
        delay = Math.max(document.getElementById("delay").value * 1000 - delayBetweenCounts, 0);
        setTimeout("start()", delay);
    }
    playing = !playing;
}

function start() {
    console.log("started.");
    var playBtn = document.getElementById("play_pause_btn");
    var stopBtn = document.getElementById("stop_btn");
    playBtn.value = "Pause";
    playBtn.disabled = false;
    stopBtn.disabled = false;
    intervalID = setInterval(sayCountFor, delayBetweenCounts);
}

function stop() {
    stepNum = 0;
    snNum = 0;
    if (playing) {
        clearInterval(intervalID);
        background_music.volume = 0.01;
    }
    playing = false;
    var playBtn = document.getElementById("play_pause_btn");
    playBtn.value = "Play";
    clearDisplay();
}

function sayCountFor() {
    displayCounts();
    voices[stepNum].play();
    if (stepNum == 3 || stepNum == 8) {
        if (snNum % 2 == 0)
            setTimeout("rightCommand.play()", 400);
        else
            setTimeout("leftCommand.play()", 400);
    }

    stepNum++;

    if (stepNum == 12) {
        stepNum = 0;
        snNum++;
        if (snNum == totalSN)
            stop();
    }
}

function displayCounts() {
    snCountText = document.getElementById("current-sn");
    snCountText.innerHTML = "" + (snNum + 1);

    stepCountText = document.getElementById("current-sn-step");
    stepCountText.innerHTML = "" + (stepNum + 1);
}

function clearDisplay() {
    snCountText = document.getElementById("current-sn");
    snCountText.innerHTML = "";

    stepCountText = document.getElementById("current-sn-step");
    stepCountText.innerHTML = "";
}

function calculateDelayBetweenCounts() {
    speed = document.getElementById("speed_range").value;
    return speed;
}