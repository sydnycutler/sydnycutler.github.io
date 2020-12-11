const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.508329&lon=-86.945831&units=imperial&appid=a3edd51b32d231b1e1e57e71e090182d";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('curtemp').textContent = jsObject.current.temp;
    document.getElementById('descript').textContent = jsObject.current.weather[0].description;
    document.getElementById('humidity').textContent = jsObject.current.humidity;
    document.getElementById('alert').textContext = jsObject.current.alerts.description;

  });

    const URL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.508329&lon=-86.945831&units=imperial&appid=a3edd51b32d231b1e1e57e71e090182d";

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    var x = 1;
    var weekDay = new Array(7);
    weekDay[0] = "Sun";
    weekDay[1] = "Mon";
    weekDay[2] = "Tues";
    weekDay[3] = "Wed";
    weekDay[4] = "Thur";
    weekDay[5] = "Fri";
    weekDay[6] = "Sat";
    for (var i = 0; i < jsObject.daily.length; i++ ) {
        var date = new Date(jsObject.daily[i].dt * 1000);
        var today = weekDay[date.getDay()];
        if (date == 'feels_like.day') {
            document.getElementById('dotw' + x).textContent = today;
            document.getElementById('temp' + x).textContent = jsObject.daily[i].temp.day;

            const imagesrc = 'http://openweathermap.org/img/wn' + jsObject.daily[i].weather[0].icon + '.png';
            const tion = jsObject.daily[i].weather[0].description;
            document.getElementById('icon' + x).setAttribute('src', imagesrc);
            document.getElementById('icon' + x).setAttribute('alt', tion);

            x++;
        }
    }
});