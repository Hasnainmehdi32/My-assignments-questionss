/*
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.

*/

let personAge = 20;
if(personAge < 2){
    console.log(`the person is baby`);
}else if (personAge >= 2 && personAge < 4){
    console.log(`the person is a toddler`);

}else if (personAge >= 4 && personAge < 13){
    console.log(`the person is a Kid`);

}else if (personAge >= 13 && personAge < 20){
    console.log(`the person is a teeneger`);

}else if (personAge >= 20 && personAge < 65){
    console.log(`the person is a adult`);

}else if (personAge >= 65  ){
    console.log(`the person is a elder`);
}