// index.js

const districtsData = require('./districts.json');

function getDistricts() {
    return districtsData.map(district => district.name);
}

function getCities(districtName) {
    const district = districtsData.find(d => d.name === districtName);
    if (district) {
        return district.cities.map(city => city.name);
    }
    return [];
}

function getDNDivisions(districtName, cityName) {
    const district = districtsData.find(d => d.name === districtName);
    if (district) {
        const city = district.cities.find(c => c.name === cityName);
        if (city) {
            return city.dnDivisions;
        }
    }
    return [];
}

module.exports = {
    getDistricts,
    getCities,
    getDNDivisions
};
