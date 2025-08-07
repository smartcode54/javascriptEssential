function showweatherDetials(event){
    event.preventDefault();
    const city = document.getElementById("city").value;
        const apiKey = '27feac34e1a101adfe41ad08fa64bed7';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s, Degree: ${data.wind.deg}°, Gust: ${data.wind.gust} m/s</p>
                <p>Description: ${data.weather[0].description}</p>`;
                console.log(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
        });

}
document.getElementById("weatherForm").addEventListener("submit", showweatherDetials);