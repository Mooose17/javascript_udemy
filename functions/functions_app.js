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
  function sumArray(arg){
    let total = 0
    for (let i = 0; i < arg.length; i++){
        total = arg[i] + total;
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