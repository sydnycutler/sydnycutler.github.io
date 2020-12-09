const apiURL = "https://api.openweathermap.org/data/2.5/onecall?id=3530103&units=imperial&appid=a3edd51b32d231b1e1e57e71e090182d";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('curtemp').textContent = jsObject.weather[0].description;
   document.getElementById('humidity').textContent = jsObject.main.humidity;
   document.getElementById('descript').textContext = jsObject.alerts.description;

});