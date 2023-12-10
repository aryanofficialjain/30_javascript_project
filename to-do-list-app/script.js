const button = document.querySelector('.btn');
const list_container  = document.querySelector(".list-container")
const inputbox = document.querySelector("#input");

function save() {
    localStorage.setItem("data", list_container.innerHTML);
}

function addtask() {
    if (inputbox.value === "") {
        alert("Write Your Task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list_container.appendChild(li);
        let del = document.createElement("span");
        del.innerHTML = "\u00d7";
        li.appendChild(del);
        save();
    }
    inputbox.value = "";
}

list_container.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save();
    }
});

function show() {
    list_container.innerHTML = localStorage.getItem("data");
}

show();
    