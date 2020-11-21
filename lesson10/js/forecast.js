const castURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=6f653c2cd15523df9a5166654b1b0b55";

fetch(castURL)
    .then(response => response.json())
    .then(jsObject => {
        console.log(jsObject);

        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(forecast);

        // jsObject.list.forEach.String.includes('18:00:00');

        const weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
        for(let day=0; day<forecast.length;day++){
            const date= new Date(forecast);
            const imagesrc = 'https://openweathermap.org/img/f/' + jsObject.weather[0].icon + 'png'; 
            document.getElementById('tabledate').textContent= weekday[date.getDay()];
            document.getElementById('temp').textContent= forecast.main.temp;
            document.getElementById('iconsrc').textContent = imagesrc;
            document.getElementById('weatherimage').setAttribute('src', imagesrc);
            document.getElementById('weatherimage').setAttribute('alt', desc);
          }
           
          });
        