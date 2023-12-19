const container = document.querySelector(".container");
const URL = "https://picsum.photos/";

// Function to generate a random number between 1000 and 1099
function random() {
  return Math.floor(Math.random() * 100) + 250;
}

// Function to load a specified number of images into the container
function load(numberimg = 10) {
  let i = 0;
  while (i < numberimg) {
    const img = document.createElement("img");
    const imgUrl = `${URL}${random()}`;
    img.src = imgUrl;
    container.appendChild(img);
    i++;
  }
}

// Example usage: Load 10 images into the container initially
load();

// Load more images when scrolling to the bottom of the page
window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    load();
  }
});
