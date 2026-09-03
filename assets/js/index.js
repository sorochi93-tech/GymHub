const scrollToTopDiv = document.getElementById("scrollToTopSection");

const toggleButton = document.getElementById("toggle-button");
const dropdown = document.getElementById("dropdown");



const scrollToTopSection = document.getElementById("scrollToTopSection");

window.addEventListener("scroll", () => {
  scrollToTopSection.classList.toggle("hidden", window.scrollY <= 300);
});

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 300) {
//     scrollToTopDiv.classList.remove("hidden");
//   } else {
//     scrollToTopDiv.classList.add("hidden");
//   }
// });

// scrollToTopDiv.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

toggleButton.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});
