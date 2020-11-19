const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=6f653c2cd15523df9a5166654b1b0b55";

fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);

    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(forecast);

   // jsObject.list.forEach.String.includes('18:00:00');

   const weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
for (let day = 0; day < forecast.length; day++) {
    const date = new Date(forecast[day].dt_txt);
    document.getElementById('weatherdate${day+1}').textContent = weekday[date.getDay()];
    dosument.getElementById('weatherimage')
    document.getElementById('${day+1}').textContent = forecast[day].main.temp;
}

  // let day = 0;
   // forecast.forEach( x => {
     //   cont date = new Date(x.dt_txt);
       // document.getElementById('dotw${day+1}').textContent = weekday[date.getDay()];
        //document.getElementById('forecast${day+1}').textContent = forecast.main.temp;
    })
  });