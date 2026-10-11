const apiKey = "YOUR_API_KEY"; // Using your secure API key
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

async function getWeather(city) {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await res.json();
        if(res.ok) {
            document.getElementById('cityName').innerText = `${data.name} 🌸`;
            document.getElementById('temp').innerText = `${Math.round(data.main.temp)}°C`;
            document.getElementById('condition').innerText = data.weather[0].description.toUpperCase();
            document.getElementById('humidity').innerText = `${data.main.humidity}%`;
            document.getElementById('wind').innerText = `${data.wind.speed} m/s`;
            document.getElementById('errorMsg').innerText = '';
        } else {
            document.getElementById('errorMsg').innerText = "Cyber city not found!";
        }
    } catch (e) {
        document.getElementById('errorMsg').innerText = "Network Error!";
    }
}

searchBtn.onclick = () => {
    if(cityInput.value.trim()) getWeather(cityInput.value.trim());
};

getWeather("Tokyo");
