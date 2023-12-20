const Keyword = [
    'HTML',
    'CSS',
    'Javascript',
    'Geeks for Geeks',
    'Leet code',
    'code studio',
    'Web deveopment',
    'Hello',
    "Heroku",
    "Hambueger Menu"
]


const inputbox = document.querySelector("#input");
const resultbox = document.querySelector(".result");

inputbox.addEventListener("keyup", ()=> {
    let result = [];
    let input  = inputbox.value;
    if(input.length){
        result = Keyword.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());


        });
        console.log(result);

    }
    display(result);

    if(!result.length){
        resultbox.innerHTML = "";
    }
});



function display(result){
    const content = result.map((list)=>{
        return "<li onclick=select(this)>" + list + "</li>";
    });

    resultbox.innerHTML = "<ul>" + content.join("") + "</ul>";
}


function select(list){
    inputbox.value = list.innerHTML;
    resultbox.innerHTML = "";
}

