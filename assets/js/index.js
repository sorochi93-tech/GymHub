const ScrollToTop = document.getElementById("ScrollToTopSection");

const toggleButton = document.getElementById("toggle-button");
const dropdown = document.getElementById("dropdown");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    ScrollToTop.classList.remove("hidden");
  } else {
    ScrollToTop.classList.add("hidden");
  }
});

ScrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

toggleButton.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});
