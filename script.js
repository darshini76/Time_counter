let countdown;
const countdownDisplay = document.getElementById('countdown');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

function startTimer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    countdownDisplay.textContent = display;
}

startButton.addEventListener('click', () => {
    const seconds = parseInt(prompt('Enter the countdown time in seconds:'));
    
    if (!isNaN(seconds)) {
        startTimer(seconds);
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(countdown);
    countdownDisplay.textContent = '0:00';
});
