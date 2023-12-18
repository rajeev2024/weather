const apiKey ="5039e0634a93e4282d7788d452aad15f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");



async function checkWeather(city)
{
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();


  console.log(data);

  // const imgURL = "https://openweathermap.org/img/wn/" + weather.icon + "@2x.png";

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML =  data.wind.speed + "km/h";
  // document.querySelector(".weather-icon").src=imgURL;

}

 searchButton.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
 });



//  https://api.openweathermap.org/data/2.5/weather?units=metric&q=CITY_NAME&appid=5039e0634a93e4282d7788d452aad15f