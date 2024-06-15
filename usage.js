const { getDistricts, getCities, getDNDivisions } = require('./index');

// Example usage:
const districts = getDistricts();
console.log('Districts:', districts);


const selectedDistrict = 'Colombo';
const citiesInColombo = getCities(selectedDistrict);
console.log('Cities in Colombo:', citiesInColombo);


const selectedCity = 'Colombo';
const dnDivisionsInColomboCity = getDNDivisions(selectedDistrict, selectedCity);
console.log('DN divisions in Colombo City:', dnDivisionsInColomboCity);
