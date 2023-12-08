const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function show(){
    notescontainer.innerHTML = localStorage.getItem("notes");
}

function update(){
    localStorage.setItem("notes", notescontainer.innerHTML);
}

createBtn.addEventListener("click", ()=> {
    let inputbox = document.createElement("p");
    let del = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    del.src = "img/del.png";
    notescontainer.appendChild(inputbox).appendChild(del);
});


notescontainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        update();

    } else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                update();
            }
        });
    }
})


document.addEventListener("keydown", e => {
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})

show();