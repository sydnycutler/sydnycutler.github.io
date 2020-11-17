const apiURL = "api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=6f653c2cd15523df9a5166654b1b0b55";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });

  document.getElementById('current-temp').textContent = jsObject.main.temp;