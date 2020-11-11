const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++) {

            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let date = document.createElement('p');
            let place = document.createElement('p')
            let image = document.createElement('img');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            card.appendChild(h2);
            date.textContent = 'Date of Birth:' + ' ' + prophets[i].birthdate;
            card.appendChild(date);
            place.textContent = 'Place of Birth:' + ' ' + prophets[i].birthplace;
            card.appendChild(place);
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', h2.textContent + '-' + prophets[i].order);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });
