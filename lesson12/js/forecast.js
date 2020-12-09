const castURL = "https://api.openweathermap.org/data/2.5/forecast/hourly?id=3530103&units=imperial&appid=a3edd51b32d231b1e1e57e71e090182d";

fetch(castURL)
    .then(response => response.json())
    .then(jsObject => {
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
        for (var i = 0; i < jsObject.list.length; i++ ) {
            var time = jsObject.list[i].dt_txt.substring(11);
            var date = new Date(jsObject.list[i].dt * 1000);
            var day = weekDay[date.getDay()];
            if (time == '18:00:00' && x <= 5) {
                document.getElementById('dotw' + x).textContent = day;
                document.getElementById('temp' + x).textContent = jsObject.list[i].main.temp;
    
                const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
                const tion = jsObject.list[i].weather[0].description;
                document.getElementById('icon' + x).setAttribute('src', imagesrc);
                document.getElementById('icon' + x).setAttribute('alt', tion);
    
                x++
            }
        }
      });