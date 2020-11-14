const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++ ) {
            let card = document.createElement('section');
            let div = document.createElement('div');
            let name = document.createElement('h2');
            let motto = document.createElement('h3');
            let year = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let img = document.createElement('img');

            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            year.textContent = "Year Founded: " + towns[i].yearFounded; 
            population.textContent = "Population: " + towns[i].currentPopulation;
            rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            img.setAttribute('src', "images/" + towns[i].photo);
            img.setAttribute('alt', "Photograph of: " + name.textContent);

            if (i==1 || i==4 || i==5){
            div.appendChild(name);
            div.appendChild(motto);
            div.appendChild(year);
            div.appendChild(population);
            div.appendChild(rainfall);
            card.appendChild(div);
            card.appendChild(img);

            document.querySelector('div.cities').appendChild(card);}
    }
  });