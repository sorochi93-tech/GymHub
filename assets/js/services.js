const scrollToTopDiv = document.getElementById("scrollToTopSection");

const toggleButton = document.getElementById("toggle-button");
const dropdown = document.getElementById("dropdown");

const scrollToTopSection = document.getElementById("scrollToTopSection");

const menuBtn = document.querySelector("#menuBtn");
const menuIcon = document.querySelector("#menuIcon");
const mobileMenu = document.querySelector("#mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("hidden")) {
    menuIcon.classList.remove("ri-close-line");
    menuIcon.classList.add("ri-menu-line");
  } else {
    menuIcon.classList.remove("ri-menu-line");
    menuIcon.classList.add("ri-close-line");
  }
});



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

// toggleButton.addEventListener("click", () => {
//   dropdown.classList.toggle("hidden");
// });
