// Game Constants
let inputdir = { x: 0, y: 0 };
const foodsound = new Audio("music/food.mp3");
const gameover = new Audio("music/gameover.mp3");
const movesound = new Audio("music/move.mp3");
const musicsound = new Audio("music/music.mp3");
const board = document.querySelector(".board");
const scorebox = document.querySelector("#scorebox");
let score = 0;
let speed = 10;
let lastpaintime = 0;
let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 6, y: 7 };

// Game Functions
function main(ctime) {
  window.requestAnimationFrame(main);

  if ((ctime - lastpaintime) / 1000 < 1 / speed) {
    return;
  }

  lastpaintime = ctime;
  gameEngine();
}

function isCollide(snarr) {
  for (let i = 1; i < snakeArr.length; i++) {
    if (snarr[i].x === snakeArr[0].x && snarr[i].y === snakeArr[0].y) {
      return true;
    }
  }

  if (
    snarr[0].x >= 18 ||
    snarr[0].x <= 0 ||
    snarr[0].y >= 18 ||
    snarr[0].y <= 0
  ) {
    return true;
  }

  return false;
}

function gameEngine() {
  if (isCollide(snakeArr)) {
    gameover.play();
    musicsound.pause();
    inputdir = { x: 0, y: 0 };
    alert("Game Over. Press any button to continue");
    snakeArr = [{ x: 13, y: 15 }];
    musicsound.play();
    score = 0;
    scorebox.innerHTML = "Score: " + score;
  }

  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    foodsound.play();
    score += 1;
    scorebox.innerHTML = "Score: " + score;

    snakeArr.unshift({
      x: snakeArr[0].x + inputdir.x,
      y: snakeArr[0].y + inputdir.y,
    });

    let a = 2;
    let b = 16;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  for (let i = snakeArr.length - 2; i >= 0; i--) {
    const element = snakeArr[i];
    snakeArr[i + 1] = { ...snakeArr[i] };
  }

  snakeArr[0].x += inputdir.x;
  snakeArr[0].y += inputdir.y;

  // Display snake
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    let snakeElement = document.createElement("div");
    snakeElement.style.gridColumnStart = e.x;
    snakeElement.style.gridRowStart = e.y;

    if (index === 0) {
      const img = document.createElement("img");
      img.src = "img/download.png"; // Change the image source path accordingly
      img.style.width = "56px";
      snakeElement.classList.add("head");
    //   snakeElement.appendChild(img);

      window.addEventListener("keydown", (e) => {
        switch (e.key) {
          case "ArrowUp":
            img.style.transform = "rotate(-90deg)";
          case "ArrowDown":
            img.style.transform = "rotate(90deg)";
          case "ArrowLeft":
            img.style.transform = "rotate(180deg)";
          case "ArrowRight":
            img.style.transform = "rotate(0deg)";
        }
      });
    } else {
      snakeElement.classList.add("snake");
    }

    board.appendChild(snakeElement);
  });

  // Display food
  let foodElement = document.createElement("div");
  foodElement.style.gridColumnStart = food.x;
  foodElement.style.gridRowStart = food.y;
  foodElement.classList.add("food");
  let foodimg = document.createElement("img");
  foodimg.src = "img/food.png";
  foodimg.style.width = "30px";
  board.appendChild(foodElement);
  foodElement.appendChild(foodimg);
}

// Initial setup
gameEngine();
window.requestAnimationFrame(main);

// Keyboard input
window.addEventListener("keydown", (e) => {
  movesound.play();
  musicsound.play();

  switch (e.key) {
    case "ArrowUp":
      inputdir.x = 0;
      inputdir.y = -1;
      break;
    case "ArrowDown":
      inputdir.x = 0;
      inputdir.y = 1;
      break;
    case "ArrowLeft":
      inputdir.x = -1;
      inputdir.y = 0;
      break;
    case "ArrowRight":
      inputdir.x = 1;
      inputdir.y = 0;
      break;
    default:
      break;
  }
});
