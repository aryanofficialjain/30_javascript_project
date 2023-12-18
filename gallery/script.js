const scrollbox = document.querySelector(".gallery");
const next = document.querySelector("#next");
const back = document.querySelector("#back");



scrollbox.addEventListener("wheel", (evt)=> {
    evt.preventDefault;
    scrollbox.style.scrollBehavior = "auto";
    scrollbox.scrollLeft += evt.detlaY;

});


next.addEventListener("click",(e)=>{
    scrollbox.style.scrollBehavior = "smooth";
    scrollbox.scrollLeft += 900;
})

back.addEventListener("click",(e)=>{
    scrollbox.style.scrollBehavior = "smooth";
    scrollbox.scrollLeft -= 900;
})

