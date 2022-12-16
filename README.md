<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather app</title>
    <link rel="stylesheet" href="main.css" />
</head>
<body>
    <div class="app-wrap">
        <header>
            <input type="text" autocomplete="off" class="search-box"
            placeholder="search for a city...">
        </header>
        <main>
            <section class="location">
              <div class="city">Kenya,Nairobi</div>
              <div class="date">Thursday 15 December 2022</div>
            </section>
            <div class="current">
                <div calss="temp">16<span>°c</span></div>
                <div class="weather">Sunny</div>
                <div class="hi-low">12°c / 15°c</div>
            </div>
        </main>
    </div>
    <script src="index.js"></script>
</body>
</html>



*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body  {
    font-family: 'montserrat', sans-serif;
    background-color: darksalmon;
    background-size: cover;
    background-position: topcenter;
}

.app-wrap {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: none;
}

header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 15px 15px;
}
header inputs {
    width: 100%;
    max-width: 280px;
    padding: 10px 15px;
    border: none;
    outline: none;
    background-color: plum;
    border-radius: 16px 0px 16px 0px;
    border-bottom: 3px solid #DF8E00;

    color: #313131;
    font-size: 20px;
    font-weight: 300px;
    transition: 0.2s ease-out;

}

header input:focus {
    background-color: plum;
}

main {
    flex: 1 1 100%;
    padding: 25px 25px 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.location .city {
    color: #fff;
    font-size: 32px;
    font-weight: 500px;
    margin-bottom: 5px;
}
.location .date {
    color: #fff;
    font-size: 16px;
}

.current .temp {
    color: #FFF;
    font-size: 102px;
    font-weight: 900;
    margin: 30px 0px;
    text-shadow: 2px 10px rgba(0, 0, 0, 0.7);
}

.current.temp span {
    font-weight: 500;
}

.current .weather {
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
    font-style: italic;
    margin-bottom: 15px;
    text-shadow: 0px 3px rgba(0, 0, 0, 0.4);

}

.current .hi-low {
    color:#fff;
    font-size: 24px;
    font-weight: 500px;
    text-shadow: 0px 4px rgba(0, 0, 0, 0.4);
}
    

}

onst api = {
    key: "608cd618565f59767b1a70d5cab63162",
    baseurl: "https://home.openweathermap.org/api_keys"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults (query) {
    fetch('${api.base}weather?q=${query}&units=metric&APPID=${api.key}')
    .then(weather => {
        return weather.json();
    }).then(displayResults);
        
}

function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = '${weather.name}, ${weather.sys.country}';

    let now = new date();
    let date =  document.querySelector('.location .daye');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = '${Math.round(weather.main.temp)}<span>°c</span>';

    let waether_el = document.querySelector('.current .weather');
    waether_el.innerText = weather.weather[0].main;

    let hilow =document.querySelector('.hi-low');
    hilow.innerText = '${Math.round(weather.main.temp_min)}°c / ${weather.main.temp_max}°c';
    
} 
function dateBuilder (d) {
    let months = ["January", "February", "March","April","May", "June","July", "August", "September", "October", "November","December",];
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return '${day} ${date} ${month} ${year}';

}

{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
}