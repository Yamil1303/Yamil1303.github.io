const requestURL = 'https://yamil1303.github.io/termProject/json/chart.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const rentals = jsonObject['rentals'];
        console.log(rentals);
        for (let i = 0; i < rentals.length; i++ ) {
            let card = document.createElement('section');
            let div = document.createElement('div');
            let name = document.createElement('h2');
            let max = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let img = document.createElement('img');

            max.textContent = rentals[i].max. persons;
            year.textContent = "Year Founded: " + rentals[i].yearFounded; 
            population.textContent = "Population: " + rentals[i].currentPopulation;
            rainfall.textContent = "Annual Rain Fall: " + rentals[i].averageRainfall;
            img.setAttribute('id', "img");  //edited
            img.setAttribute('src', "images/" + rentals[i].photo);
            img.setAttribute('alt', "Photograph of: " + name.textContent);

            div.appendChild(name);
            div.appendChild(max);
            div.appendChild(population);
            div.appendChild(rainfall);
            card.appendChild(div);
            card.appendChild(img);

            document.querySelector('div.rentals').appendChild(card);
    }
  });