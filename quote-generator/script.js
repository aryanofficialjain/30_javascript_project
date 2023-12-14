
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

const api = "https://api.quotable.io/random";

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    if(data.content.length < 80){

    quote.innerHTML = data.content;
    author.innerHTML = data.author;

    }

}

getquote(api);


function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML + "   -" + author.innerHTML ,"Tweet Window", "width=600, height=400" );
}

