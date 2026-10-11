const apiKey = "7e6b9c36933b6082d00de55fa969e66d";
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

async function getAdvancedWeather(city) {
    try {
        // Current Weather
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await res.json();

        // 5-Day Forecast
        const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        const forecastData = await forecastRes.json();

        if(res.ok && forecastRes.ok) {
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('temp').innerText = `${Math.round(data.main.temp)}°C`;
            document.getElementById('condition').innerText = data.weather[0].description.toUpperCase();
            document.getElementById('feelsLike').innerText = `Feels like: ${Math.round(data.main.feels_like)}°C`;
            document.getElementById('humidity').innerText = `${data.main.humidity}%`;
            document.getElementById('wind').innerText = `${data.wind.speed} m/s`;
            document.getElementById('pressure').innerText = `${data.main.pressure} hPa`;
            document.getElementById('weatherIconBadge').innerText = data.weather[0].main.toUpperCase();
            document.getElementById('errorMsg').innerText = '';

            // Render 5-Day Forecast (taking every 8th item roughly representing daily intervals)
            const container = document.getElementById('forecastContainer');
            container.innerHTML = '';
            const dailyList = forecastData.list.filter((_, idx) => idx % 8 === 0).slice(0, 5);
            
            dailyList.forEach(item => {
                const dateObj = new Date(item.dt * 1000);
                const dayName = dateObj.toLocaleDateString('en', { weekday: 'short' });
                
                const card = document.createElement('div');
                card.className = 'forecast-card';
                card.innerHTML = `
                    <span class="day">${dayName}</span>
                    <div class="f-temp">${Math.round(item.main.temp)}°</div>
                `;
                container.appendChild(card);
            });

        } else {
            document.getElementById('errorMsg').innerText = "ERROR: TARGET CITY NOT FOUND";
        }
    } catch (e) {
        document.getElementById('errorMsg').innerText = "CRITICAL: NETWORK PROTOCOL FAILURE";
    }
}

searchBtn.onclick = () => {
    if(cityInput.value.trim()) getAdvancedWeather(cityInput.value.trim());
};

getAdvancedWeather("Siliguri");
