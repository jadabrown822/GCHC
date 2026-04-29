let slideIndex = 0;
let slideTimer;

// Initialize the slideshow
showSlides();

// Next/previous controls
function plusSlides(n) {
  // Clear the automatic timer when user clicks
  clearTimeout(slideTimer);
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex = n - 1);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Handle manual navigation boundaries
  if (n !== undefined) {
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
  } else {
    // Automatic increment
    slideIndex++;
    if (slideIndex >= slides.length) { slideIndex = 0 }
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and activate the dot
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";

  // Set timer for 5 seconds (5000ms)
  slideTimer = setTimeout(showSlides, 5000); 
}