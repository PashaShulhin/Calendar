const apiKey = "a17ae672e425c8313861e8f404a4388a";
async function getWeather() {
  const city = document.getElementById("city").value;
  if (city === "") {
    alert("type the city!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== "200") {
      document.getElementById("weather-info").innerHTML = `<p>Unknown city</p>`;
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
            <p>temperature: ${temperature}°C</p>
            <p>description: ${description}</p>
            <p>humidity: ${humidity}%</p>
            <p>windSpeed: ${windSpeed} м/с</p>
          `;

          count++;
          if (count === 7) break;
        }
      }

      document.getElementById("weather-info").innerHTML = forecastHTML;
    }
  } catch (error) {
    console.error("error:", error);
    document.getElementById("weather-info").innerHTML = "<p>error</p>";
  }
}
