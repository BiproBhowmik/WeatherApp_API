// // Tutorial by http://youtube.com/CodeExplained
// // api key : 82005d27a116c2880c8f0fcb866998a0

// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// // App data
// const weather = {};

// weather.temperature = {
//     unit : "celsius"
// }

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "da932d715fb385fc6df17bda1e3cd42c";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

// // SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
// function showError(error){
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = `<p> ${error.message} </p>`;
// }

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude){
    // let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    let api = 'https://api.openweathermap.org/data/2.5/weather?lat=24.33&lon=29.99&appid=da932d715fb385fc6df17bda1e3cd42c';
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// // C to F conversion
// function celsiusToFahrenheit(temperature){
//     return (temperature * 9/5) + 32;
// }

// // WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
// tempElement.addEventListener("click", function(){
//     if(weather.temperature.value === undefined) return;
    
//     if(weather.temperature.unit == "celsius"){
//         let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
//         fahrenheit = Math.floor(fahrenheit);
        
//         tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
//         weather.temperature.unit = "fahrenheit";
//     }else{
//         tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
//         weather.temperature.unit = "celsius"
//     }
// });


//var x = document.getElementById("demo");
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

function showPosition(position) {
  // x.innerHTML = "Latitude: " + position.coords.latitude +
  // "<br>Longitude: " + position.coords.longitude;

  console.log(position.coords.latitude);
  console.log(position.coords.longitude);

//   const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/alerts?lat="+position.coords.latitude+".5&lon="+position.coords.longitude,
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "1e7985eda0mshbd79672da40a5a3p128f1cjsncfd700a5fe42",
// 		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

fetch("https://weatherbit-v1-mashape.p.rapidapi.com/alerts?lat="+position.coords.latitude+"&lon="+position.coords.longitude, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "1e7985eda0mshbd79672da40a5a3p128f1cjsncfd700a5fe42",
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response.json());
})
.catch(err => {
	console.error(err);
});
}