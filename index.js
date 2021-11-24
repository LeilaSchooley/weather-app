async function getWeather() {
  let response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=3db17fc135c2cd780b50535bedd2f485",
    { mode: "cors" }
  );
  const jsonWeather = await response.json();
  let location = jsonWeather["name"];
  let windspeed = jsonWeather["wind"]["speed"];
  let temperature = jsonWeather["main"]["temp"];
  let humidity = jsonWeather["main"]["humidity"];

  let weatherData = {
    location: location,
    windspeed: windspeed,
    temperature: temperature,
    humidity: humidity,
  };
}
getWeather();
