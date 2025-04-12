// Number of slideshows
const numSlideshows = 9;

// Initialize slide indices for each slideshow
let slideIndex = Array.from({ length: numSlideshows }, () => 1);

// IDs of each slideshow container
let slideId = Array.from({ length: numSlideshows }, (_, index) => `slideshow${index + 1}`);

// Call showSlides for each slideshow
for (let i = 0; i < numSlideshows; i++) {
  showSlides(1, i);
}

// Next/previous controls for a specific slideshow
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls for a specific slideshow
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

// Show slides for a specific slideshow
function showSlides(n, no) {
  let i;
  let x = document.getElementById(slideId[no]).getElementsByClassName("mySlides");

  if (n > x.length) {
    slideIndex[no] = 1;
  }

  if (n < 1) {
    slideIndex[no] = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x[i].classList.remove("fade");
  }

  x[slideIndex[no] - 1].style.display = "block";

  // Remove the .fade class after a delay (adjust the delay based on your preference)
  setTimeout(() => {
    x[slideIndex[no] - 1].classList.remove("fade");
  }, 100);
}
