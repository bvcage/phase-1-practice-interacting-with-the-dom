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

// like button functionality
const likeButton = document.querySelector('#heart');
const likeList = document.querySelector('ul.likes');
likeButton.addEventListener('click', () => {
    if (!pause) {
        const existingLike = likeList.querySelector(`li#like-count-${counterVal}`);
        if (!existingLike) {
            const newLike = document.createElement('li');
            newLike.id = `like-count-${counterVal}`;
            newLike.textContent = `${counterVal} has been liked 1 time`;
            likeList.appendChild(newLike);
        } else {
            // split existing like line for manipulation
            const existingLikeSplit = existingLike.textContent.split(' ');
            let plural = existingLikeSplit.pop();
            let likeCount = parseInt(existingLikeSplit.pop());
            likeCount += 1;                         // add 1 to like count
            if (plural.length < 5) {plural += 's'}  // add 's' to 'time' if needed
            // set like line to updated string
            const updatedLike = existingLikeSplit;
            updatedLike.push(likeCount);
            updatedLike.push(plural);
            existingLike.textContent = updatedLike.join(' ');
        }
        // TO-DO = add sorting functionality
    }
});

// comments functionality
const commentList = document.querySelector('#list');
const commentForm = document.querySelector('#comment-form');
const commentInput = document.querySelector('#comment-input');
commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // add comment to list
    newComment = document.createElement('p');
    newComment.textContent = commentInput.value;
    commentList.appendChild(newComment);
    // reset form input
    commentInput.value = '';
});

// counter functionality
const counter = document.querySelector('#counter');
let counterVal = -1;

incrementCounter = function () {
    if (!pause) {counter.textContent = ++counterVal}
    setTimeout(incrementCounter, 1000);
}

incrementCounter();