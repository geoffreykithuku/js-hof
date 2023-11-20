const data = require('./db.json')

const countriesNameWithPSK = (countries) => {
    let filtered = countries.filter(country => country.country.toLowerCase().includes('p') || country.country.toLowerCase().includes('s') || country.country.toLowerCase().includes('k'))

    return filtered
}

//text by printing to console
console.log(countriesNameWithPSK(data))