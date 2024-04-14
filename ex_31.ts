/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

let usernames2: string[] = ["Ya", "Ali", "Madad", "AS", "Fayaz", "Hussain"];

// to removes all member
usernames2 = [];
// console.log(usernames2);

if(usernames2.length > 0){
    
for(let i = 0; i < usernames2.length; i ++){
    if(usernames2[i] == "Ali"){
        console.log(`hello ${usernames2 [i]} would like to see a status report?\n`)
    
    
}else{
console.log(`hello ${usernames2 [i]} thank you for logging in again`)
}

   }

}else{
    console.log(`We need to find some users!`)
}

