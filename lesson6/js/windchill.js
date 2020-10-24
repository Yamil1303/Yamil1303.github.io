const tempNum = parseFloat(document.getElementById("temp").textContent);
const speedNumber = parseFloat(document.getElementById("speed").textContent);
let windchill = 35.74 + 0.6215 * tempNum - 35.75 * Math.pow(speedNumber, 0.16) + 0.4275 * tempNum * Math.pow(speedNumber, 0.16);
windchill = Math.round(windchill);

if (tempNum <=50 && speedNumber > 3) {
    document.getElementById("chill").textContent="Wind Chill: " + windchill + "\xB0F"
} else{
    document.getElementById("chill").text.textContent="No Wind Chill today"
}