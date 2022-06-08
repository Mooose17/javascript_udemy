let maximum = parseInt(prompt("Please enter your maximum number!"));
while (!maximum){
    maximum = parseInt(prompt("Please enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt("Enter your first guess!"));
let tries = 1

while (parseInt(guess) !== targetNum){
    tries++;
    if(guess === "q") break;
    if(tries >=10) break;
    if(guess > targetNum){
        guess = prompt("Too High. Enter a new guess!");
    } else{
        guess = prompt("Too Low. Enter a new guess.");
    }
}
if(guess === "q"){
    console.log("You quit.")
} else if(tries>=10){
    console.log(`You failed after ${tries} tries.`)
} else {
console.log(`You got it in ${tries}.`)
}
