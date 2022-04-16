let api_key = '1d8f883a50e83bc7299495fa0e2343b9';

// Box temp elements
const morning_temp_el = document.querySelector("#morning-temp"),
      afternoon_temp_el = document.querySelector("#afternoon-temp"),
      evening_temp_el = document.querySelector("#evening-temp"),
      overnight_temp_el = document.querySelector("#overnight-temp");


//Box rain elements
const morning_rain_el = document.querySelector("#morning-rain"),
      afternoon_rain_el = document.querySelector("#afternoon-rain"),
      evening_rain_el = document.querySelector("#evening-rain"),
      overnight_rain_el = document.querySelector("#overnight-rain");


// Now header elements
const city_name_el = document.querySelector("#city-name"),
      city_input_el = document.querySelector("#city-input"),
      city_button_el = document.querySelector("#search-city"),
      temp_now_el = document.querySelector(".temp-now"),
      preasure_now_el = document.querySelector(".preasure-now"),
      wind_now_el = document.querySelector(".wind-now"),
      air_now_el = document.querySelector(".air-now");

let x = 0;



// Get lat & lon http://api.openweathermap.org/geo/1.0/direct?q={city name}&appid={API key}


let city_name = 'Wrocław';

let received,
    lon, 
    lat,
    country;

function get_cord() {
    received = JSON.parse(httpGet(url_cords));
    lat = received['0']['lat']
    lon = received['0']['lon']
    country = received['0']['country']
    console.log(received)
}

let url_cords = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${api_key}`;


function get_weather() { // current weather
    get_cord();
    let url_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    received = JSON.parse(httpGet(url_weather));
    console.log(received)
    update_weather();
}

function get_further_weather() {
    get_cord();
    let url_weather = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${api_key}`
    received = JSON.parse(httpGet(url_weather));
    console.log(received)
    //update_weather();
}

function update_weather() {
    temp_now = +received['main']['temp'] - 273;
    preasure_now = +received['main']['pressure'];
    wind_now = round(+(received['wind']['speed']) * 3.6);

}



function httpGet(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

