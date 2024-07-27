// JavaScript for interactivity

document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        let likes = parseInt(button.getAttribute('data-likes'));
        likes++;
        button.setAttribute('data-likes', likes);
        button.textContent = `Like (${likes})`;
    });
});

// Example: Show alert on donate button click
document.querySelector('#donate button').addEventListener('click', () => {
    alert('Thank you for your interest in donating!');
});


// JavaScript for interactivity and hero image carousel

let currentImageIndex = 0;
const heroImages = document.querySelectorAll('.hero-images img');
const totalImages = heroImages.length;

function changeHeroImage() {
    heroImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    heroImages[currentImageIndex].classList.add('active');
}

setInterval(changeHeroImage, 5000); // Change image every 5 seconds

document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        let likes = parseInt(button.getAttribute('data-likes'));
        likes++;
        button.setAttribute('data-likes', likes);
        button.textContent = `Like (${likes})`;
    });
});

document.querySelector('#donate button').addEventListener('click', () => {
    alert('Thank you for your interest in donating!');
});
