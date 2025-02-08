// script.js

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const beggingPhrases = [
    'Please?',
    'Pretty please?',
    'Please just say yes!',
    'I promise I\'ll be a good boy!',
    'I won\'t bully you na promise!',
    'Just one little yes?',
    'I\'ll do anything!',
    'Have a heart!',
    'Don\'t be like that!',
    'Give me a chance!'
];
const pleadingImages = [
    './sad/bobsad.webp',
    './sad/pussinboots.webp',
    './sad/pikasad.jpg',
    './sad/sademoji.png',
    './sad/sadcat.jpg',
    './sad/sadbubbles.jpg',
];

let usedImages = [];

yesBtn.addEventListener('click', () => {
    window.location.href = 'bouquet.html';
});

noBtn.addEventListener('click', () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    noBtn.style.position = 'absolute';
    noBtn.style.top = `${randomY}px`;
    noBtn.style.left = `${randomX}px`;
    document.getElementById('begging-text').textContent = beggingPhrases[Math.floor(Math.random() * beggingPhrases.length)];
    let image;
    do {
        image = pleadingImages[Math.floor(Math.random() * pleadingImages.length)];
    } while (usedImages.includes(image));
    document.getElementById('pleading-image').src = image; // Set the src attribute dynamically
    document.getElementById('pleading-image').width = 200; // Set the width attribute dynamically
    document.getElementById('pleading-image').height = 200; // Set the height attribute dynamically
    usedImages.push(image);
    if (usedImages.length === pleadingImages.length) {
        usedImages = [];
    }
    document.querySelector('.pleading-container').classList.add('show'); // Add this line to show the pleading container
});