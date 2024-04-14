"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

*/
const myfriends = ["Hasnain", "Saqlain", "Irfan", "khan"];
console.log(myfriends);
console.log(`we have three more freinds to invite on diner/n`);
// adding three more friends
// add at begning
myfriends.unshift("yasir");
// ["Hasnain", "Saqlain", "Irfan" "khan"];
console.log(myfriends);
// add at middle
myfriends.splice(2, 0, "sindhi");
console.log(myfriends);
// add at list
myfriends.push("mehdi");
console.log(myfriends);
// print all friends along with message 
for (let i = 0; i < myfriends.length; i++) {
    console.log(`Mr. ${myfriends[i]}you are invited to my dinner`);
}
