"use strict";
/*
Store a person's name a variable and then print that person's name in
lowercase, uppercase, and titlecase.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const PersonName = "hasnain mehdi";
// lowercase 
console.log(PersonName.toLowerCase());
// uppercase 
console.log(PersonName.toUpperCase());
// titlecase 
let firstletter = PersonName.charAt(0).toUpperCase();
let restletter = PersonName.slice(1).toLowerCase();
let titlecase = firstletter + restletter;
console.log(titlecase);
