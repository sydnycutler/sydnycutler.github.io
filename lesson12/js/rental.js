const requestJSON = 'json/rental.json';
fetch(requestJSON)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const rental = jsonObject['rental'];

        for (let i = 0; i < rental.length; i++) {

            let card = document.createElement('section');
            let name = document.createElement('h2');
            let persons = document.createElement('p');
            let reserve1 = document.createElement('p');
            let reserve2 = document.createElement('p');
            let half = document.createElement('p');
            let full = document.createElement('p');
            let image = document.createElement('img');

            name.textContent = rental[i].name;
            card.appendChild(name);
            persons.textContent = 'Max Capacity:' + ' ' + rental[i].persons;
            card.appendChild(persons);
            reserve1.textContent = 'Reserved Half Day:' + ' ' + rental[i].reserhalf;
            card.appendChild(reserve1);
            reserve2.textContent = 'Reserved Full Day:' + ' ' + rental[i].reserfull;
            card.appendChild(reserve2);
            half.textContent = 'Half Day:' + ' ' +rental[i].half;
            card.appendChild(half);
            full.textContent = 'Full Day:' + ' ' + rental[i].full;
            card.appendChild(full);
            image.setAttribute('src', rental[i].image);
            image.setAttribute('alt', name.textContent + '-' + rental[i].order);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });