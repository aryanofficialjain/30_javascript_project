const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "da899d00cec112e665fabcc6bf32863a";

const input = document.querySelector("#input");
const btn = document.querySelector(".btn");

async function weather(cit){
    const response = await fetch(apiurl + cit + `&appid=${apikey}`);
    const data = await response.json();

    console.log(data);

    if(response.status == 404){
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
        // alert("Invalid City/Country Name");
    }
    else{

        document.querySelector(".error").style.display = "none";

    const city = document.querySelector(".city");
    city.innerHTML = data.name;

    const temp = document.querySelector(".temp");
    temp.innerHTML = Math.floor(data.main.temp) + ' °C';

    const wind = document.querySelector(".wind");
    wind.innerHTML = data.wind.speed + " km/hr";

    const humid = document.querySelector(".humid");
    humid.innerHTML = data.main.humidity + "%";

    const img = document.querySelector("#image");

    if(data.weather[0].main == "Mist"){
        img.src = "img/img/mist.png";

    }
    else if(data.weather[0].main == "Rain"){
        img.src = "img/img/rain.png";

    }
    else if(data.weather[0].main == "Clear"){
        img.src = "img/img/clear.png";

    }

    else if(data.weather[0].main == "Clouds"){
        img.src = "img/img/clouds.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        img.src = "img/img/drizzle.png";

    }
    else if(data.weather[0].main == "Snow"){
        img.src = "img/img/snow.png";
    }

    }


}

btn.addEventListener("click", ()=> {
    weather(input.value);
    document.querySelector(".weather").style.display = "block";
});


document.addEventListener("keypress", (key)=>{
    if(key.key === "Enter"){
        weather(input.value);
        document.querySelector(".weather").style.display = "block";
    }
})

