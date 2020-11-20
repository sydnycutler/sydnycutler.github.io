const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=6f653c2cd15523df9a5166654b1b0b55";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('curtemp').textContent = jsObject.weather[0].description;
   document.getElementById('hightemp').textContent = jsObject.main.temp;
   document.getElementById('humidity').textContent = jsObject.main.humidity;
   document.getElementById('wind').textContent = jsObject.wind.speed;


});