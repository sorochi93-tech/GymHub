
const toggleButton = document.getElementById("toggle-button");
const dropdown = document.getElementById("dropdown");

toggleButton.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
});
