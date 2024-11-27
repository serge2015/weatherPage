let tempUnits;
let units;
let unitsAlt;
let favorite;
const d = new Date();
const n = d.getDay();

function dayOfWeekAsString(dayIndex) {
    return ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat", "Sun", "Mon", "Tue", "Wed", "Thu"][dayIndex] || '';
  }

function validateInput(){
    if (document.getElementById('location').value.trim() === "") {
        alert("Please enter a city");
        document.inputWeather.location.focus();
        return false;
    } else {
        getWeather(document.getElementById('location').value);
    }
}
function setFav() {
  sessionStorage.setItem("favorite", document.getElementById("city").innerText);
}

function loadFav(){
    favorite = sessionStorage.getItem("favorite");
    if (favorite) {
        document.getElementById('location').value = `${favorite}`;
        getWeather(favorite);
    }
}

async function getWeather(location) {
    document.getElementById('icon').style.display = "none";
    document.querySelector('.temp').style.display = "none";
    document.getElementById('city').style.display = "none";
    document.querySelector('.fav_city').style.display = "none";
    document.querySelector('.five_day_forecast').style.display = "none";
    document.querySelector('.one').style.display = "block";
    document.querySelector('.two').style.display = "block";
    const weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=79c219b599e24530ab245407242611&q=${location}&days=5&aqi=no&alerts=no`)
    const weatherData = await weather.json();
    document.getElementById('F').checked ? (
        tempUnits = `${weatherData.current.temp_f}`,
        units = "F",
        unitsAlt = "C"
    ): 
    (
        tempUnits = `${weatherData.current.temp_c}`,
        units = "C",
        unitsAlt = "F"
    );
    document.querySelector('.temp').innerHTML = `${tempUnits}&#176; ${units}<button class="changeUnits" onclick="changeUnits(document.getElementById('location').value)">${unitsAlt}</button>`;
    document.getElementById('icon').src = `${weatherData.current.condition.icon}`;
    document.getElementById('icon').style.opacity = 1;
    document.getElementById('city').innerHTML = `${location}`;
    if (favorite === location) {
        document.getElementById('city').innerHTML += "&nbsp;&#11088;"
    }
    weatherData.forecast.forecastday.forEach((element, index) => {
        document.getElementById("longDay"+index).innerHTML = dayOfWeekAsString(n + 1 + index);
        units ==='F' ? (
            document.getElementById("day"+index).innerHTML = `${weatherData.forecast.forecastday[index].day.maxtemp_f}<br />${weatherData.forecast.forecastday[index].day.mintemp_f}`
        ):
        (document.getElementById("day"+index).innerHTML = `${weatherData.forecast.forecastday[index].day.maxtemp_c}<br />${weatherData.forecast.forecastday[index].day.mintemp_c}`
        );
        document.getElementById("icon"+index).src = `${weatherData.forecast.forecastday[index].day.condition.icon}`;
        document.getElementById("icon"+index).style.opacity = 1;
    });
    document.querySelectorAll("li:not(:last-child)")
  .forEach((element) => {
    element.style.borderRight = "1px solid olivedrab", 
    element.style.animation = "fadeIn 1s ease-in"
    });
    document.getElementById('fav_city').disabled = false;
    document.getElementById('fav_city').checked = false;
    document.getElementById('icon').style.display = "block";
    document.getElementById('icon').style.animation = "fadeIn 1s ease-in";
    document.querySelector('.temp').style.display = "block";
    document.querySelector('.temp').style.animation = "fadeIn 1s ease-in";
    document.getElementById('city').style.display = "block";
    document.getElementById('city').style.animation = "fadeIn 1s ease-in";
    document.querySelector('.fav_city').style.display = "block";
    document.querySelector('.fav_city').style.animation = "fadeIn 1s ease-in";
    document.querySelector('.five_day_forecast').style.display = "flex";
    document.querySelector('.five_day_forecast').style.animation = "fadeIn 1s ease-in";
    document.querySelector('.one').style.display = "none";
    document.querySelector('.two').style.display = "none";

}   

async function changeUnits(location){
    const weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=79c219b599e24530ab245407242611&q=${location}&days=5&aqi=no&alerts=no`)
    const weatherData = await weather.json();
    units === "C" ? (
        tempUnits = `${weatherData.current.temp_f}`,
        units = "F",
        unitsAlt = "C"
    ): 
    (
        tempUnits = `${weatherData.current.temp_c}`,
        units = "C",
        unitsAlt = "F"
    );
    document.querySelector('.temp').innerHTML = `${tempUnits}&#176; ${units}<button class="changeUnits" onclick="changeUnits(document.getElementById('location').value)">${unitsAlt}</button>`;
    weatherData.forecast.forecastday.forEach((element, index) => {
        units ==='F' ? (
            document.getElementById("day"+index).innerHTML = `${weatherData.forecast.forecastday[index].day.maxtemp_f}<br />${weatherData.forecast.forecastday[index].day.mintemp_f}`
        ):
        (document.getElementById("day"+index).innerHTML = `${weatherData.forecast.forecastday[index].day.maxtemp_c}<br />${weatherData.forecast.forecastday[index].day.mintemp_c}`
        );
    });
}