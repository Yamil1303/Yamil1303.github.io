const requestURL = 'https://yamil1303.github.io/termProject/json/chart.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const rentals = jsonObject['rentals'];
        console.log(rentals)
        for (let i = 0; i < rentals.length; i++ ) {
            let card = document.createElement('section');
            let div = document.createElement('div');
            let name = document.createElement('h2');
            let max = document.createElement('p');
            let rhalf = document.createElement('p');
            let rfull = document.createElement('p');
            let whalf = document.createElement('p');
            let wfull = document.createElement('p');
            let img = document.createElement('img');

            name.textContent = rentals[i].name;
            max.textContent = "Max. persons: " + rentals[i].maxPersons; 
            rhalf.textContent = "Half day reservation: " + rentals[i].reservation["half day"] + "$";
            rfull.textContent = "Full day reservation: " + rentals[i].reservation["full day"] + "$";
            whalf.textContent = "Half day walk-in: " + rentals[i]["walk-in"]["half day"] + "$";
            wfull.textContent = "Full day walk-in: " + rentals[i]["walk-in"]["full day"] + "$";
            img.setAttribute('id', "img");  //edited
            img.setAttribute('src', "images/" + rentals[i].photo);
            img.setAttribute('alt', "Photograph of: " + name.textContent);

            div.appendChild(name);
            div.appendChild(max);
            div.appendChild(rhalf);
            div.appendChild(rfull);
            div.appendChild(whalf);
            div.appendChild(wfull);
            card.appendChild(div);
            card.appendChild(img);

            document.querySelector('div.rentals').appendChild(card);
    }
  });