const apikey = 'e6e61135c40b04103183838d7c2f2645';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(){

    const errMsg = document.querySelector(".errmsg");
    errMsg.innerText = "";
    document.querySelector(".p1").innerText = "";
    document.querySelector(".p2").innerText = "";
    document.querySelector(".p3").innerText = "";

    const cityName = document.querySelector(".inp").value;
    const res = await fetch(apiURL+`${cityName}`+`&appid=${apikey}`);
    var data = await res.json();
    if(data.name==undefined){
        errMsg.innerText = "Invalid City Name!, please retry";
    }
    else{
        //alert(data.main.temp);
        document.querySelector(".p1").innerText = data.main.temp + " °C"
        document.querySelector(".p2").innerText = data.main.humidity + " g/m3";
        document.querySelector(".p3").innerText = data.wind.speed + " m/s";

    }
}
const btn = document.querySelector(".btn");
btn.addEventListener("click",checkWeather);