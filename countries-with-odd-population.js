const data = require("./db.json");

const countriesWithOddPopulation = (countries) => {
  const filtered = countries.filter((country) => {
    if (
      country.population % 2 !== 0 &&
      country.country.length >= 5 &&
      country.country.length <= 7
    ) {
      return country;
    }
  });
  return filtered;
};

console.log(countriesWithOddPopulation(data));
