let Userscore = 0;
let Compscore  = 0;


const buttons = document.querySelectorAll(".btn");
const userscore = document.querySelector(".user-score");
const comscore = document.querySelector(".com-score");
const result = document.querySelector(".result");

const comp = ()=> {
    let arr = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random()*3);
    return arr[random];
}


const showwinner = (userwin)=> {
    if(userwin){
        Userscore++;
        userscore.innerHTML = "You" + " " +  Userscore;
        console.log("winner");
        result.innerHTML = "Winner";
    }
    else{
        Compscore++;
        comscore.innerHTML = "Com"+  " " +  Compscore;
        console.log("loser");
        result.innerHTML = "Loser";
    }
}

const playgame = (id)=> {
    console.log("user",id);
    const computerchoice = comp();
    console.log("computer",computerchoice);

    if(id === computerchoice){
        console.log("Draw");
        result.innerHTML = "Draw";
    }
    else{
        let userwin = true;
        if(id === "rock"){
           userwin =  computerchoice === "paper" ? false :true;
        }
        else if(id === "scissor"){
           userwin =  computerchoice === "rock" ? false :true;
        }
        else {
           userwin =  computerchoice === "rock"? false: true;
        }
        showwinner(userwin);
    }

 


}


buttons.forEach((btn)=> {
    btn.addEventListener("click", (e)=> {
        // console.log("clicked");
        let id = btn.id;
        // console.log(id);
        playgame(id);
    });
});

