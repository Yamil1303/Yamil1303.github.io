/* ----------- Days of the Week -----------*/
var d = new Date();
var todayNumber = d.getDay();
//console.log(todayNumber);
var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//console.log(week[todayNumber]);


const api = "//api.openweathermap.org/data/2.5/forecast?id=3530103&appid=57eab0ca980a33623115672515a2c752&units=imperial";

  fetch(api)
  .then((response) => response.json())
  .then((weatherfor) => {

    let mylist = weatherfor.list;
    console.log(mylist);
    for (let i = 0; i < mylist.length-16; i++) {

        let time = mylist[i].dt_txt;
        
        if (time.includes('18:00:00')) {
            todayNumber += 1;
            if (todayNumber == 7){
                todayNumber = 0;
            }
            if (time==2){
                break;
            }

            let forecastdiv = document.createElement('div');
            let h4 = document.createElement('h4');
            let myicon = document.createElement('img');
            let weathericon = weatherfor.list[i].weather[0].icon;
            let iconpath = 'https://openweathermap.org/img/w/' + weathericon + '.png';
            let fivetemp = document.createElement('p');
            
            h4.textContent = week[todayNumber];
            myicon.src = iconpath;
            fivetemp.textContent = weatherfor.list[i].main.temp + '\xB0' + 'F';
            
            forecastdiv.appendChild(h4);
            forecastdiv.appendChild(myicon);
            forecastdiv.appendChild(fivetemp);

            document.querySelector('section.forecast').appendChild(forecastdiv);
        }  
    }
  });