const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns == Preston || Soda Springs || Fish Haven) {

            let card = document.createElement('section');
            let h1 = document.createElement('h1');
            let h3 = document.createElement('h3')
            let year = document.createElement('p');
            let pop = document.createElement('p');
            let rain = document.createElement('p');
            let image = document.createElement('img');

            h1.textContent = towns[i].name;
            card.appendChild(h1);
            h3.textContent = towns[i].motto;
            card.appendChild(h3);
            year.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
            card.appendChild(year);
            pop.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
            card.appendChild(pop);
            rain.textContent = 'Annual Rain Fall:' + ' ' + towns[i].averageRainfall;
            card.appendChild(rain);
            image.setAttribute('src', towns[i].photo);
            image.setAttribute('alt', h1.textContent + h3.textContent + '-' + towns[i].order);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });
