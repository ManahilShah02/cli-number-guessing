#! /usr/bin/env node
import inquirer from "inquirer";

// 1) Computer will generate a random number
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random()* 10 + 1);
//console.log(randomNumber);
//bcz if we don't comment it it wil gives us answer on cmd
console.log("Welcome to Number Guessing Game");

const answers = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Please guess a number between 1-6:",
    }
])
 if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! You guess a right number");
}
else{
    console.log("Oopss! You guesed a wrong number-");
}

// the above random number is given by us so it will be less interesting to
// play this game

//now let us make a change and in constant randomNumber write Math.random
// instead of any number

//maths is like a box whuch contains all operations and give us options when 
//writeit

// but random give us values in decimal form only in between 0 to 1 but we want
// values round off so we 
// write Math.floor instead of Math.random for roundoff values

//now in floor we have to assign values to it to round off it so write 
//Math.random in Maths.floor brackets so it will assign values in integers(not 
//in decimals) and round off the decimal value to its descending values

//As we know that random only gives number in between 0 to 1 so we multiply 
//it by 10 for giving valus till 9 (always till one number lesser than given 
//multiply number)

//for excluding 0 like for making dice we write *10+1 nut in this 10 will be 
//included unlike above 