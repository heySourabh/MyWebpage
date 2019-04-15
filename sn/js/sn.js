var totalSN = 0;
var playing = false;
var voices = [];
var leftCommand;
var rightCommand;
var delayBetweenCounts = 5000;
var snNum = 0;
var stepNum = 0;
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
    background_music.volume = 0.1;
    background_music.loop = true;
    background_music.play();
}

function bgMusicPlay() {
    var bgMusic = document.getElementById("bg_music_cb");
    if (bgMusic.checked) {
        background_music.play();
    } else {
        background_music.pause();
    }
}

function play_pause() {
    bgMusicPlay();
    totalSN = document.getElementById("totalSN").value;
    var playBtn = document.getElementById("play_pause_btn");
    if (playing) {
        playBtn.value = "Play";
        clearInterval(intervalID);
    } else {
        playBtn.value = "Get Ready...";
        playBtn.disabled = true;
        console.log("Waiting...");

        delay = document.getElementById("delay").value;
        setTimeout("start()", delay * 1000);
    }
    playing = !playing;
}

function start() {
    console.log("started.");
    var playBtn = document.getElementById("play_pause_btn");
    playBtn.value = "Pause";
    playBtn.disabled = false;
    intervalID = setInterval(sayCountFor, delayBetweenCounts);
}

function stop() {
    stepNum = 0;
    snNum = 0;
    if (playing)
        clearInterval(intervalID);
    playing = false;
    var playBtn = document.getElementById("play_pause_btn");
    playBtn.value = "Play";
    displayCounts();
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
            stop()
    }
}

function displayCounts() {
    snCountText = document.getElementById("current-sn");
    snCountText.innerHTML = "" + (snNum + 1);

    stepCountText = document.getElementById("current-sn-step");
    stepCountText.innerHTML = "" + (stepNum + 1);
}
