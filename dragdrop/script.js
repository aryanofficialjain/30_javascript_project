const items = document.getElementsByClassName("item");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

for(const list of items){
    list.addEventListener("dragstart", (e)=> {
        let selected = e.target;

        right.addEventListener("dragover", (e)=> {
            e.preventDefault();


        });

        right.addEventListener("drop", (e)=> {
            right.appendChild(selected)
            selected = null;


        });

        left.addEventListener("dragover", (e)=> {
            e.preventDefault();


        });

        left.addEventListener("drop", (e)=> {
            left.appendChild(selected)
            selected = null;


        });




    })
}