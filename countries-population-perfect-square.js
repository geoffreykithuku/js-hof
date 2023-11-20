const data = require("./db.json");

const perfectSquare = (countries) => {
  const filtered = countries.filter((country) => {
    if (Math.sqrt(country.population) % 1 === 0 && country.population > 0) {
      return country;
    }
  });
  return filtered;
};

console.log(perfectSquare(data));
