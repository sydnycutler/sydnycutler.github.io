const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=6f653c2cd15523df9a5166654b1b0b55";

fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);

    const temp = document.querySelector('#current-temp');
    const source = document.querySelector('#imagesrc');
    const weathericon = document.querySelector('#icon');

    temp.innerHTML = jsObject.main.temp;

    source.textContent = "https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png";
    const iconsrc = 'https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png';
    weathericon.setAttribute('src', iconsrc);
    weathericon.setAttribute('alt', jsObject.weather[0].description);
    
  });