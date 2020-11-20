const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=57eab0ca980a33623115672515a2c752&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);

    /*document.getElementById(cur).innerHTML=weatherInfo.weather[0].main;
    document.getElementById(hum).innerHTML=weatherInfo.main.humidity;
    document.getElementById(temp).innerHTML=weatherInfo.main.temp;
    document.getElementById(speed).innerHTML=weatherInfo.wind.speed;*/
  });