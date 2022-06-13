//My first function!

//Define
function singSong(){
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
//Run
singSong();

/* Defined a function called rant using an argument = message
function prints out the message 3 times in all uppercase.*/

function rant(message){
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}

//Snake eyes exercise 
function isSnakeEyes(die1,die2){
    if (die1 === 1 && die2 === 1){
        console.log("Snake Eyes!")
    } console.log("Not Snake Eyes!")
}
// Return - stops executing code after it & only returns one set of values!
function multiply(num1,num2){
    let sum = num1 * num2
    return sum;
}

function isShortsWeather(temp){
    if(temp>=75){
        return true;
    }
    return false;
}
//capitalised first letter of str
function capitalize(str){
    let newStr = str.charAt(0).toUpperCase() + str.slice(1);
    return newStr;
}
//singled out first letter using .charAt & .toUpperCase
//concatted with the string minus 1st letter with slice
//in newStr as return wouldnt allow multiple methods

//Palindrome Function
//unoptimised
function isThisAPalindrome(str1) {
    const strArr = str1.split(""); // split = string into an array
    const revStrArr = strArr.reverse(); // reverses items in array
    const backwardStr = revStrArr.join("");// joins items from array into a string.
      if (backwardStr === str1){
        return true;
      }return false;
  }
// Optimised Code
function isThisAPalindrome(str1) {
    const strArr = str1.split("");
    const revStrArr = strArr.reverse();
    const backwardStr = revStrArr.join("")
    return backwardStr === str1
  }
//add array together - onto itself
  function sumArray(argArr){
    let total = 0
    for (let i = 0; i < argArr.length; i++){
        total = argArr[i] + total;
    }
    return total;
}

function findBiggestAndSmallest(numbers) {
    let biggest = -Infinity;
    let smallest = Infinity;
    for (let num of numbers){
      if (num < smallest){
        smallest = num
      } 
      if (num > biggest){
        biggest = num
      }
    }
    return {biggest,smallest};
    }

function returnDay(dayOfWeek){
  const daysInWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  if (dayOfWeek < 1 || dayOfWeek > 7){
      return null
  } return daysInWeek[dayOfWeek - 1]; // -1 because the index is one more than the passed through argument
}

//------------------------------------------------------------

/*FACTORY FUNCTIONS - a function that can be used in setting different
variables that can use the same function for different things - 
creates an object from a function*/

function isBetweenFunc(min,max){
  return function(num){ /*return a fuction, which when given an parameter (num)
    return true if number is bigger than or equal to min and if num is less than or 
    equal to max*/
    return num >= min && num <= max;
  }
}
/*
const isChild = isBetweenFunc(0,17);
const isAdult = isBetweenFunc(18,65);
const isSenior = isBetweenFunc(66,150);
*/

//------------------------------------------------------------

//A method is a function that has been placed as a property on an object.
//if you access a function with a . = its a method & a function.

const myMaths = {
  PI: 3.14159,
  square: function (num){
    return num * num;
  },
  cube: function(num){
    return num * num * num // or num ** 3
  }
}

//Objects with functions have shorthand which is;

const myMathsShorthand = {
  PI: 3.14159,
  square(num){
    return num * num;
  },
  cube(num){
    return num * num * num // or num ** 3
  }
}
//I dont need to add the function keyword!!

//------------------------------------------------------------

function makeGuestList(personObj) {
  const splitName = personObj.name.split(" ");
  personObj.firstName = splitName[0]
  personObj.lastName = splitName[1]
  delete personObj.name
  return personObj;
}

//makeGuestList()

//-------------------------------------------------------------

function toUpperCase(str){

}

function makeMysteryFunc(){
  const rand = Math.random();
  if(rand > 0.5){
    return function(){
      console.log("Congrats!")
    }
  } else {
    return function(){
      alert("You failed")
    }
  }
}
//-------------------------------------------------------------
let square = {
  area(side){
      return side * side
  },
  perimeter(side){
      return side * 4
  }
}

//------------------------------------------------------------
//This Keyword - Relates to the top level object

const cat = {
  name:"Smudge",
  color:"Orange",
  breed:"Tabby Cat",
  meow() {
    return console.log(`${this.name} is ${this.color} and they say MEOW!`)
  }
}

//this relates to the cat object that i invoke with cat.meow

let hen = {
  name:"Helen",
  eggCount:0,
  layAnEgg(){
    this.eggCount++ // also adding 1 to eggCount for each loop iteration
    return "EGG" // Returns Egg!
  }
}


console.log(hen.layAnEgg())

//-------------------------------------
function orderSupplies(supplies, guests) {
  let total = 0
  for (let item in supplies){
    total = supplies[item] + total
  }
  let finaltotal = total * guests;
  return finaltotal;
}

function calculateTables (guests, seats) {
  
  //return 

  return{
    tables: Math.floor(guests / seats),
    remainingGuests: guests % seats
  }
  
  }


  function calculateTaxiFare(seconds) {
    let minutes = Math.ceil(seconds / 60) - 3;
    let price = 500
    if (minutes > 0){
      price = price + minutes * 70
    }
    return price;
  
  }
//---------------------------------------------
  function pickWinners(numbers) {
    let winners = [];
    for (let i = 1; i < numbers.length; i+=2){
      if (numbers[i] % 2 == 1){
        winners.push({
          seat: i,
          ticketCost: numbers[i]
        })
      }
    }
    return winners;
  }
//------------------------------------
  function gatherFeedback (feedbackArray) {
    let positive = 0
    let neutral = 0
    let negative = 0
    for (let rating of feedbackArray){
      if(rating[1]<=3){
        negative++
      } else if(rating[1]>=4 && rating[1]<=6){
        neutral++
      } else {
        positive++
      }
    }
  return {positive, neutral, negative}
  }