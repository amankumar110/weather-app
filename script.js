const api = "https://api.openweathermap.org/data/2.5/weather?q=";
const apikey = "&appid=88c66711f4380edfb49fa971f1c0194e&units=metric";
const searchform = document.querySelector("form.search");
const searchfield = document.querySelector(".searchfield");
console.log(searchform);
searchform.addEventListener("submit", function (e) {
  e.preventDefault();
  checkweather(searchfield.value);
});
async function checkweather(city) {
  const weather = await fetch(api + city + apikey);
  const data = await weather.json();
  console.log(data);
  if (weather.status === 404 || weather.status === 400) {
    document.querySelector(".error").style.visibility = "visible";
  } else {
    document.querySelector(".error").style.visibility = "hidden";
    document.querySelector(".weather").style.visibility = "visible";

    document.querySelector(".temp").textContent =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".humidity").textContent = data.main.humidity + " " + "%";
    document.querySelector(".wind").textContent = data.wind.speed +" "+ "km/h";
    if (data.weather[0].main === "Clouds") {
      document.querySelector(".weather-icon").src = "clouds.png";
    } else if (data.weather[0].main === "Drizzle") {
      document.querySelector(".weather-icon").src = "drizzle.png";
    } else if (data.weather[0].main === "Rain") {
      document.querySelector(".weather-icon").src = "rain.png";
    } else if (data.weather[0].main === "Snow") {
      document.querySelector(".weather-icon").src = "snow.png";
    } else if (data.weather[0].main === "Mist") {
      document.querySelector(".weather-icon").src = "mist.png";
    } else {
      document.querySelector(".weather-icon").src = "clear.png";
    }
  }
}
