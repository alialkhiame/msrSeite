const sections = document.querySelectorAll('.section');
const container = document.querySelector('.container');
let currentIndex = 0;

// Function to scroll to a specific section
function scrollToSection(index) {
  container.style.transform = `translateY(-${index * 100}%)`;
}

// Listen for scroll events (e.g., mouse wheel or touch gestures)
container.addEventListener('wheel', (event) => {
  if (event.deltaY > 0 && currentIndex < sections.length - 1) {
    currentIndex++;
    scrollToSection(currentIndex);
  } else if (event.deltaY < 0 && currentIndex > 0) {
    currentIndex--;
    scrollToSection(currentIndex);
  }
});
