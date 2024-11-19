const images = [
    "21.jpg",
    "8.jfif",
    "house1.jfif",
    "house3.jfif"
];

let currentIndex = 0;

// Get DOM elements
const currentImage = document.getElementById("current-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Function to update image
function updateImage(index) {
    currentImage.src = images[index];
}

// Event listeners
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage(currentIndex);
});