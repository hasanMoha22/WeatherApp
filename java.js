
let API_KEY = "ee3d748726aa99a6390487b43ddda14a";
getweatherdata = (city) =>{
    const URL = 'https://api.openweathermap.org/data/2.5/weather';
    const Full_url =` ${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherpromise = fetch(Full_url);
    console.log(city)
    return weatherpromise.then((response) =>{
        return response.json()
    })
}

function searchCity() {
    const city = document.getElementById('city-input').value;
    getweatherdata(city)
    .then((response) =>{
        showweatherdata(response)
        console.log(response)  
    })
    .catch((err) =>
    {
        console.log(err)
    })
}
showweatherdata = (weatherdata) =>{
    document.getElementById('city-name').innerText = weatherdata.name;
    document.getElementById('weather-type').innerText = weatherdata.weather[0].main;
    document.getElementById('temp').innerText = weatherdata.main.temp;
    document.getElementById('min-temp').innerText = weatherdata.main.temp_min;
    document.getElementById('max temp').innerText = weatherdata.main.temp_max;
}