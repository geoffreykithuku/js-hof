const data = require('./db.json')

const sortCountriesByName = (countries) => {
    let sorted = countries.sort()
    return sorted
}

//testing by printing to console
console.log(sortCountriesByName(data))