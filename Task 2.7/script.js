document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const regionSelect = document.getElementById("countryFilter");

  const data = [
    {
      name: "Portugal",
      region: "Europe",
      capital: "Lisboa",
      population: "11000000",
      flag: "<img src='Portugal.png' alt='Portugal Flag' />",
    },
    {
      name: "United Kingdom",
      region: "Europe",
      capital: "London",
      population: "57000000",
      flag: "<img src='United Kingdom.png' alt='United Kingdom Flag' />",
    },
    {
      name: "Italy",
      region: "Europe",
      capital: "Rome",
      population: "59000000",
      flag: "<img src='Italy.png' alt='Italy Flag' />",
    },
    {
      name: "Ukraine",
      region: "Europe",
      capital: "Kyiv",
      population: "37000000",
      flag: "<img src='Ukraine.png' alt='Ukraine Flag' />",
    },
    {
      name: "Brazil",
      region: "South America",
      capital: "Brasilia",
      population: "217000000",
      flag: "<img src='Brazil.png' alt='Brazil Flag' />",
    },
    {
      name: "France",
      region: "Europe",
      capital: "Paris",
      population: "68000000",
      flag: "<img src='France.png' alt='France Flag' />",
    },
    {
      name: "Spain",
      region: "Europe",
      capital: "Madrid",
      population: "47000000",
      flag: "<img src='Spain.png' alt='Spain Flag' />",
    },
    {
      name: "Japan",
      region: "East Asia",
      capital: "Tokyo",
      population: "11700000",
      flag: "<img src='Japan.png' alt='Japan Flag' />",
    },
  ];

  function displayCountries(filteredCountries) {
    const countriesList = document.getElementById("countriesList");
    countriesList.innerHTML = "";

    filteredCountries.forEach((country) => {
      const countryCard = document.createElement("div");
      countryCard.classList.add("country-card");
      countryCard.innerHTML = `
        <p>${country.flag}</p>
        <h2>${country.name}</h2>
        <p><strong>Population:</strong> ${country.population}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Capital:</strong> ${country.capital}</p>
      `;
      countriesList.appendChild(countryCard);
    });
  }

  function filterCountries() {
    const searchInputValue = searchInput.value.toLowerCase();
    const regionSelectValue = regionSelect.value;

    const filteredCountries = data.filter((country) => {
      const matchesSearch = country.name
        .toLowerCase()
        .includes(searchInputValue);
      const matchesRegion = regionSelectValue
        ? country.region === regionSelectValue
        : true;
      return matchesSearch && matchesRegion;
    });

    displayCountries(filteredCountries);
  }

  searchInput.addEventListener("input", filterCountries);
  regionSelect.addEventListener("change", filterCountries);

  displayCountries(data);

  const button = document.getElementById("myButton");
  button.addEventListener("click", function () {
    const body = document.body;

    if (body.style.backgroundColor === "white") {
      body.style.backgroundColor = "#2e2e2e";
      body.style.color = "white";
    } else {
      body.style.backgroundColor = "white";
      body.style.color = "black";
    }
  });
});
