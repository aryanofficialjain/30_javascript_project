const buttons = document.querySelectorAll(".box");
const reset = document.querySelector("#reset");
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

let turnO = true;

for (let btn of buttons) {
    btn.addEventListener("click", (e) => {
        console.log("click");
        if (turnO) {
            e.target.innerHTML = "O";
            turnO = false;
        } else {
            e.target.innerHTML = "X";
            turnO = true;
        }
        btn.disabled = true;
        check();
    });
}

const show = (p1) => {
    let box = document.createElement("div");
    box.innerHTML = `${p1} is Winner`;
    box.classList.add("winner");
    box.style.top = "10%";
    document.querySelector(".container").appendChild(box);
    dis();
};

const dis = () => {
    for (let i of buttons) {
        i.disabled = true;
    }
};

const draw = () => {
    let box = document.createElement("div");
    box.innerHTML = `Draw`;
    box.classList.add("winner");
    document.querySelector(".container").appendChild(box);
};

const check = () => {
    let isdraw = true;

    for (let i of arr) {
        let p1 = buttons[i[0] - 1].innerText;
        let p2 = buttons[i[1] - 1].innerText;
        let p3 = buttons[i[2] - 1].innerText;

        if (p1 !== "" && p2 !== "" && p3 !== "") {
            if (p1 === p2 && p2 === p3) {
                console.log("winner", p1);
                show(p1);
                dis();
                isdraw = false;
                break;
            }
        } else {
            isdraw = false;
        }
    }

    if (isdraw) {
        draw();
    }
};

const reseit = () => {
    turnO = true;
    for (let i of buttons) {
        i.innerHTML = "";
        i.disabled = false;
    }

    const win = document.querySelector(".winner");
    if (win) {
        win.remove();
    }
};

reset.addEventListener("click", reseit);
