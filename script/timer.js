var h1 = document.getElementById('timer'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    miliseconds = 0, seconds = 0, minutes = 0,
    t;

function add() {
    miliseconds++;
    if (miliseconds >= 100) {
        miliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    }
    
    h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (miliseconds > 9 ? miliseconds : "0" + miliseconds);

    timer();
}
function timer() {
		t = setTimeout(add, 10);
		flag=false;
}



/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
    flag=true;
}
function clearTimer() {
    h1.textContent = "00:00:00";
    miliseconds = 0; seconds = 0; minutes = 0;

}

