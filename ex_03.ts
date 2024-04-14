/*
Store a person's name a variable and then print that person's name in 
lowercase, uppercase, and titlecase.
*/


const PersonName: string = "hasnain mehdi";

// lowercase 
console.log(PersonName.toLowerCase());


// uppercase 
console.log(PersonName.toUpperCase());

// titlecase 
let firstletter: string = PersonName.charAt(0).toUpperCase();
let restletter: string = PersonName.slice(1).toLowerCase();
let titlecase = firstletter + restletter; 
console.log(titlecase);

