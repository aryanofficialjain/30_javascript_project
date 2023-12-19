// Assuming you have HTML elements with the specified IDs: "msg", "input", "eye", and a class "app"
const msg = document.querySelector("#msg");
const input = document.querySelector("#input");
const img = document.querySelector("#eye");


img.addEventListener("click", () => {
    if (input.type === "text") {
        input.type = "password";
    } else {
        input.type = "text";
    }
});


input.addEventListener("input", ()=> {
    if(input.value.length > 0){
        msg.style.display = "block";
        msg.innerHTML = "Weak";
        msg.style.color = "red";

    }
    else{
        msg.style.display = "none";

    }

    if(input.value.length > 4){
        msg.innerHTML = "Meduim";
        msg.style.color = "yellow";
    }


    const specialSymbols = "!@#$%^&*";
    if(input.value.length > 8 && [...specialSymbols].some(symbol => input.value.includes(symbol))){
        msg.innerHTML = "Hard";
        msg.style.color = "green";
    }



})