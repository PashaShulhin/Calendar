import { apiKey } from "./config.js";
console.log(apiKey);

async function getWeather() {
  const city = document.getElementById("city").value;

  if (!Boolean(city)) {
    alert("Please type the city!");
    return;
  }

  const baseUrl = "https://api.openweathermap.org/data/2.5";
  const url = `${baseUrl}/forecast?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

  try {
    console.log("Making request to:", url);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`City not found (Status: ${response.status})`);
    }

    const data = await response.json();

    if (data.cod !== "200") {
      document.getElementById(
        "weather-info"
      ).innerHTML = `<p>Unknown city or error: ${data.message}</p>`;
    } else {
      let forecastHTML = `<p><strong>${city}</strong></p>`;

      let count = 0;
      for (let i = 0; i < data.list.length; i++) {
        const forecast = data.list[i];

        if (forecast.dt_txt.includes("12:00:00")) {
          const date = new Date(forecast.dt * 1000).toLocaleDateString();
          const temperature = forecast.main.temp;
          const description = forecast.weather[0].description;
          const humidity = forecast.main.humidity;
          const windSpeed = forecast.wind.speed;

          forecastHTML += `
            <p><strong>${date}</strong></p>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind speed: ${windSpeed} м/с</p>
          `;

          count++;
          if (count === 7) break;
        }
      }

      const weatherInfoElement = document.getElementById("weather-info");
      if (weatherInfoElement) {
        weatherInfoElement.innerHTML = forecastHTML;
      } else {
        console.error("Element with id 'weather-info' not found.");
      }
    }
  } catch (error) {
    console.error("Error:", error);
    const weatherInfoElement = document.getElementById("weather-info");
    if (weatherInfoElement) {
      weatherInfoElement.innerHTML = `<p>${error.message}</p>`;
    } else {
      console.error("Element with id 'weather-info' not found.");
    }
  }
}
document.querySelector(".button").addEventListener("click", getWeather);
