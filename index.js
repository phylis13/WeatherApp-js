const api = {
  key: "608cd618565f59767b1a70d5cab63162",
  baseurl: "https://api.openweathermap.org/data/2.5/"
}
const searchbox = document.querySelector(`.search-box`);
searchbox.addEventListener(`keypress`, setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
      getResults(searchbox.value);
      console.log(searchbox.value);
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(weather => {
      return weather.json();
  }).then(displayResults);
      
}

function displayResults (weather) {
  let city = document.querySelector(`.location .city`);
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new date();
  let date =  document.querySelector(`.location .daye`);
  date.innerText = dateBuilder(now);

  let temp = document.querySelector(`.current .temp`);
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let waether_el = document.querySelector(`current .weather`);
  waether_el.innerText = weather.weather[0].main;

  let hilow =document.querySelector(`.hi-low`);
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${weather.main.temp_max}°c`;
  
} 
function dateBuilder (d) {
  let months = ["January", "February", "March","April","May", "June","July", "August", "September", "October", "November","December",];
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;

}
