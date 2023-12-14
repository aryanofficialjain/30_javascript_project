const input = document.querySelector("#input");
const btn = document.querySelectorAll("button");

let str = "";

btn.forEach((e)=>{
    e.addEventListener("click",(e)=>{


        if(e.target.innerHTML == "=" && str.length < 10){
            str = eval(str);
            input.value = str;


        }
        else if(e.target.innerHTML == "del"){
            str = str.slice(0, -1);
            input.value = str;
        }

        else if(e.target.innerHTML == "clear"){
            str = "";
            input.value = str;

        }
        else{
            str += e.target.innerHTML;
            input.value = str;
    

        }
       



        


    });
});