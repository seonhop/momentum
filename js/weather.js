const API_KEY = "81bbb10848bdc84bfa18a3e121b4f1dd";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector(".weather span");
            console.log(weather);
            const name = document.querySelector(".bottom-bar__loc");
            const weatherIcon = document.querySelector(".weather img");
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            weather.innerText = data.weather[0].main;
            name.innerText = data.name;
        });
}

function onGeoError() {
    alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
