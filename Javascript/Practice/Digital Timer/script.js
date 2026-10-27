const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const timer = document.getElementById('timer');

let seconds = 0;
let interval;

timer.textContent = "00:00"

function updateTimer() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const displayMinutes = minutes.toString().padStart(2, "0");
    const displaySeconds = remainingSeconds.toString().padStart(2, "0");

    timer.textContent = `${displayMinutes}:${displaySeconds}`;
}

startBtn.addEventListener('click', () => {
    if (interval == null) {
        interval = setInterval(() => {
            seconds++;
            updateTimer();
        }, 1000);
    }
})

pauseBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
})

resetBtn.addEventListener('click', () => {
    seconds = 0;
    clearInterval(interval);
    interval = null;
    timer.textContent = "00:00"

})