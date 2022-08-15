// pause button functionality

let pause = false;
const pauseButton = document.querySelector('#pause');
pauseButton.addEventListener('click', () => {
    if (pause === true) {
        pause = false;
        pauseButton.textContent = 'pause';
    } else {
        pause = true;
        pauseButton.textContent = 'resume';
    }
});

// plus minus button functionality

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

        if (!existingLike) {    // if no likes exist for this number ...

            const newLike = document.createElement('li');                   // create new like li
            newLike.id = `like-count-${counterVal}`;
            newLike.textContent = `${counterVal} has been liked 1 time`;
            likeListElements = likeList.querySelectorAll('li');
            if (!likeListElements) {                                        // insert into sorted list
                likeList.appendChild(newLike);
            } else {
                let found = -1;
                for (let i = 0; i < likeListElements.length && found < 0; ++i) {
                    let likesForNum = parseInt(likeListElements[i].textContent.split(' ')[0]);
                    if (likesForNum > counterVal) {
                        found = i;
                    }
                }
                likeList.insertBefore(newLike, likeList.children[found]);
            }

        } else {                // if likes already exist for this number ...

            const existingLikeSplit = existingLike.textContent.split(' ');  // split for manipulation
            let plural = existingLikeSplit.pop();
            let likeCount = parseInt(existingLikeSplit.pop());
            likeCount += 1;                                                     // add 1 to like count
            if (plural.length < 5) {plural += 's'}                              // add 's' to 'time' if needed
            const updatedLike = existingLikeSplit;
            updatedLike.push(likeCount);
            updatedLike.push(plural);
            existingLike.textContent = updatedLike.join(' ');               // set to updated string

        }
    }
});

// comments functionality

const commentList = document.querySelector('#list');
const commentForm = document.querySelector('#comment-form');
const commentInput = document.querySelector('#comment-input');

commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    newComment = document.createElement('p');       // add comment as new paragraph
    newComment.textContent = commentInput.value;
    commentList.appendChild(newComment);
    commentInput.value = '';                        // reset form input
});

// counter functionality

const counter = document.querySelector('#counter');
let counterVal = -1;    // first run executes immediately, counter will be 0

incrementCounter = function () {
    if (!pause) {counter.textContent = ++counterVal}
    setTimeout(incrementCounter, 1000);
}

incrementCounter();