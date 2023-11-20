const data = require('./db.json')

const sortCountriesByPopulation = (countries) => {
    return countries.sort((a, b) => a.population - b.population)
}
    
//testing by printing to console
console.log(sortCountriesByPopulation(data))