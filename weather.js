async function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = '208b1d4d4b6553dd0f3de8f76c64dcc6';  // Replace with your actual API key
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.status === 200) {
            const city = data.name;
            const weather = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;

            document.getElementById('weather').innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>Description: ${weather}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Humidity: ${humidity}%</p>
            `;
        } else {
            document.getElementById('weather').innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p>Error: Unable to fetch weather data.</p>`;
    }
}
