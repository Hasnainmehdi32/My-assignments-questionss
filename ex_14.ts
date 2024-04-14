/*
If you could invite anyone, living or deceased, to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner. 
 Then use your list to print a message to each person, inviting them to dinner.
*/
const myfriends: string [] = ["Hasnain", "Saqlain", "Irfan"];

// 1st method with loop
for(let i = 0; i < myfriends.length; i++){
    console.log(`Mr.${myfriends[i]}! you are invited to my dinner on monday\n`);

}

// 2nd method with map ()
myfriends.map((ib)=>{


console.log(`Mr. ${ib}}! you are invited to my dinner on monday\n`)
})