// pause functionality
let pause = false;
const pauseButton = document.querySelector('#pause');
pauseButton.addEventListener('click', togglePause);
function togglePause() {
    if (pause === true) {
        pause = false;
        pauseButton.textContent = 'pause';
    } else {
        pause = true;
        pauseButton.textContent = 'resume';
    }
}

// plus minus functionality
const plusButton = document.querySelector('#plus');
plusButton.addEventListener('click', () => {
    if (!pause) {counter.textContent = ++counterVal}
});
const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', () => {
    if (!pause) {counter.textContent = --counterVal}
})

// counter functionality
const counter = document.querySelector('#counter');
let counterVal = -1;

incrementCounter = function () {
    if (!pause) {counter.textContent = ++counterVal}
    setTimeout(incrementCounter, 1000);
}

incrementCounter();