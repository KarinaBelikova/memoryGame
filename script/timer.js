var time = document.getElementById('timer'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    miliseconds = 0, seconds = 0, minutes = 0,
    t;
var time_value = 0;

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
    
    time.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (miliseconds > 9 ? miliseconds : "0" + miliseconds);

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
    time.textContent = "00:00:00";
    miliseconds = 0; seconds = 0; minutes = 0;

}

