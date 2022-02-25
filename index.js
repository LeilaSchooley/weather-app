let input = document.getElementById("location");
let form = document.querySelector("form");
let mainArea = document.querySelector("div");

async function getWeather(locationName) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=metric&APPID=3db17fc135c2cd780b50535bedd2f485`,
    { mode: "cors" }
  );
  const jsonWeather = await response.json();

  let location = jsonWeather["name"];
  let windspeed = jsonWeather["wind"]["speed"];
  let temperature = jsonWeather["main"]["temp"];
  let humidity = jsonWeather["main"]["humidity"];
  let feels_like = jsonWeather["main"]["feels_like"];

  temperature = Math.round(temperature * 10) / 10;
  console.log(temperature);
  windspeed = Math.round(windspeed * 10) / 10;
  humidity = Math.round(humidity * 10) / 10;
  let weatherData = {
    location: location,
    windspeed: windspeed,
    temperature: temperature,
    humidity: humidity,
    feels_like: feels_like,
  };
  return weatherData;
}

function clearMainArea() {
  mainArea.textContent = "";
}
form.addEventListener("submit", (e) => {
  let userLocation = input.value;
  let data = getWeather(userLocation);
  loadingWeather();
  data.then(function (response) {
    console.log(response);
    clearMainArea();
    addData(response);
  });
});
function loadingWeather() {
  let loadingWeatherText = document.createElement("h3");

  loadingWeatherText.textContent = "Loading Weather";
  mainArea.appendChild(loadingWeatherText);
}
function addData(userData) {
  let weatherPara = document.createElement("h3");
  let weatherLocation = document.createElement("h3");
  let windSpeed = document.createElement("h3");
  let humidity = document.createElement("h3");

  weatherLocation.textContent = userData["location"];
  weatherPara.textContent = `${userData["temperature"]}F◦`;
  windSpeed.textContent = userData["windspeed"];

  mainArea.appendChild(weatherLocation);
  mainArea.appendChild(weatherPara);
}
