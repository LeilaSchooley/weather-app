async function getWeather() {
  let weatherData = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=3db17fc135c2cd780b50535bedd2f485",
    { mode: "cors" }
  );
  const jsonWeather = await weatherData.json();
  console.log(jsonWeather);
}
getWeather();
