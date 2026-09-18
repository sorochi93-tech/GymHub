const scrollToTopDiv = document.getElementById("scrollToTopSection");

const toggleButton = document.getElementById("toggle-button");
const dropdown = document.getElementById("dropdown");

const scrollToTopSection = document.getElementById("scrollToTopSection");

const secModal = document.querySelector("#secModal");
const secCancelModal = document.querySelector("#secCancelModal");
const modalButton = document.querySelector("#modalButton");

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

modalButton.addEventListener("click", () => {
  secModal.classList.remove("hidden");
  secModal.classList.add("flex");
});

secCancelModal.addEventListener("click", () => {
  secModal.classList.add("hidden");
  secModal.classList.add("flex");
});
