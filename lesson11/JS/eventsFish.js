const url = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            let event = document.createElement('section');
            let first = document.createElement('p');
            let second = document.createElement('p');
            let third = document.createElement('p');
            let fourth = document.createElement('p');

            if (towns[i].name=="Fish Haven"){
                first.textContent = towns[i].events[0];
                second.textContent = towns[i].events[1];
                third.textContent = towns[i].events[2];
                fourth.textContent = towns[i].events[3];

                event.appendChild(first);
                event.appendChild(second);
                event.appendChild(third);
                event.appendChild(fourth);

                document.getElementById('events').appendChild(event);
            }
        }
    });