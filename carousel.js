let reviewObject = [
    {
        name: 'malignant',
        src: './reviews/imgs/malignant-poster.jpg',
        alt: 'malignant poster',
        class: 'poster',
        link: './reviews/malignant.html'
    }, {
        name: 'escape room 2',
        src: './reviews/imgs/escape_room_2-poster.jpg',
        alt: 'escape room 2 poster',
        class: 'poster',
        link: './reviews/escape-room-2.html'
    }, {
        name: 'the slob',
        src: './reviews/imgs/the-slob.jpg',
        alt: 'the slob cover',
        class: 'poster',
        link: './reviews/imgs/the-slob.jpg'
    }, {
        name: 'in the hands of the heathens',
        src: './reviews/imgs/in-the-hands-of-the-heathens.jpg',
        alt: 'in the hands of the heathens cover',
        class: 'poster',
        link: './reviews/imgs/in-the-hands-of-the-heathens.jpg'
    }
]

let currentReview = document.querySelector('.carousel-content');
const link = document.createElement('a');
link.href = reviewObject[0].link;
currentReview.appendChild(link);

const img = document.createElement('img');
img.src = reviewObject[0].src;
img.alt = reviewObject[0].alt;
img.className = reviewObject[0].class;
link.appendChild(img);

let currentPoster = 0;

const right = () => {
    currentPoster++;
    if (currentPoster >= reviewObject.length) currentPoster = 0;
    const img = document.querySelector('.poster');
    img.src = reviewObject[currentPoster].src;
    img.alt = reviewObject[currentPoster].alt;
    img.className = reviewObject[currentPoster].class;
}

const left = () => {
    currentPoster--;
    if (currentPoster < 0) currentPoster = reviewObject.length - 1;
    const img = document.querySelector('.poster');
    img.src = reviewObject[currentPoster].src;
    img.alt = reviewObject[currentPoster].alt;
    img.className = reviewObject[currentPoster].class;
}

setInterval(function() {
    currentPoster++;
    if (currentPoster >= reviewObject.length) currentPoster = 0;
    const img = document.querySelector('.poster');
    img.src = reviewObject[currentPoster].src;
    img.alt = reviewObject[currentPoster].alt;
    img.className = reviewObject[currentPoster].class;
}, 5200);

document.querySelector('.button-right').onclick = right;
document.querySelector('.button-left').onclick = left;