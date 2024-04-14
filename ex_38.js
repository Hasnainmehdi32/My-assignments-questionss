"use strict";
/*
Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

*/
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(nameOfCity, country = "pakistan") {
    return `${nameOfCity} is in ${country}`;
}
;
// 3 cities
let city1 = describe_city("Karachi");
let city2 = describe_city("Larkana");
let city3 = describe_city("Sukkur");
let city4 = describe_city("Ranipur", "Gambat");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
