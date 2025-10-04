// Simple auto-rotating review carousel
const reviews = document.querySelectorAll(".review");
let index = 0;

setInterval(() => {
  reviews[index].classList.remove("active");
  index = (index + 1) % reviews.length;
  reviews[index].classList.add("active");
}, 4000);