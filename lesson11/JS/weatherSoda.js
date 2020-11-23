const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5607916&appid=57eab0ca980a33623115672515a2c752&units=imperial";



/* ----------------Fetch -----------------*/
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //console.log(weatherInfo);

    /* ------------------ Weather Summary -------------------*/
    document.getElementById("title").innerHTML=weatherInfo.name;
    document.getElementById("cur").innerHTML=weatherInfo.weather[0].main;
    document.getElementById("hum").innerHTML=weatherInfo.main.humidity;
    var tempNum = document.getElementById("temp").innerHTML=weatherInfo.main.temp;
    var speedNumber = document.getElementById("speed").innerHTML=weatherInfo.wind.speed;

    /* WIND CHILL CALCULATION */
    let windchill = 35.74 + 0.6215 * tempNum - 35.75 * Math.pow(speedNumber, 0.16) + 0.4275 * tempNum * Math.pow(speedNumber, 0.16);
    windchill = Math.round(windchill);
    if (tempNum <=50 && speedNumber > 3) {
        document.getElementById("chill").textContent="Wind Chill: " + windchill + "\xB0F";
    } else{
        document.getElementById("chill").textContent="No Wind Chill today";
    }

  });

