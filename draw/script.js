const canvas = document.getElementById("draw");
const tools = document.getElementById("tool");
const ctx = canvas.getContext("2d");

const canvasoffsetX = canvas.offsetLeft;
const canvasoffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasoffsetX;
canvas.height = window.innerHeight - canvasoffsetY;

let painting = false;
let linewidth = 5;

let startX;
let startY;

tools.addEventListener("click", (e) => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

tools.addEventListener('change', (e) => {
    if (e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }
    if (e.target.id === 'line') {
        linewidth = e.target.value;
    }
});

canvas.addEventListener('mousedown', (e) => {
    painting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', (e) => {
    painting = false;
    ctx.stroke();
});

canvas.addEventListener('mousemove', draw);

function draw(e) {
    if (!painting) return;

    ctx.lineWidth = linewidth;
    ctx.lineCap = 'square';

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();

    startX = e.clientX;
    startY = e.clientY;
}
