import { data } from "./data.js";

const searchInput = document.getElementById("searchInput");
const regionSelect = document.getElementById("countryFilter");
const countriesList = document.getElementById("countriesList");

function displayCountries(filteredCountries) {
  countriesList.innerHTML = "";

  filteredCountries.forEach((country) => {
    const countryCard = document.createElement("div");
    countryCard.classList.add("country-card");

    const flag = document.createElement("img");
    flag.src = country.flag;
    flag.alt = `${country.name} Source`;
    countryCard.append(flag);

    const countryName = document.createElement("h2");
    countryName.textContent = country.name;
    countryCard.append(countryName);

    const population = document.createElement("p");
    population.innerHTML = `<b>Population:</b> ${country.population}`;
    countryCard.append(population);

    const region = document.createElement("p");
    region.innerHTML = `<b>Region:</b> ${country.region}`;
    countryCard.append(region);

    const capital = document.createElement("p");
    capital.innerHTML = `<b>Capital:</b> ${country.capital}`;
    countryCard.append(capital);

    countriesList.append(countryCard);
  });
}

function filterCountries() {
  const searchInputValue = searchInput.value.toLowerCase();
  const regionSelectValue = regionSelect.value;

  const filteredCountries = data.filter((country) => {
    const matchesSearch = country.name.toLowerCase().includes(searchInputValue);
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

const themeSwitch = document.querySelector(".switch input");
const body = document.body;

themeSwitch.addEventListener("change", function () {
  if (themeSwitch.checked) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  }
});
