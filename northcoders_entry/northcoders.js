//Kata 1
function greetFriend (name) {
    return "Hello " + name + "!"
  }
//Kata 2
function add(a, b) {
    return a + b
  }
//Kata 3
function oddOrEven(num) {
    if (num % 2 === 0){
      return "even"
    }
    return "odd"
  }
//Kata 4
function retrievePassword (user) {
    return user.password
  }
//Kata 5
function retrieveKey(object, inputKey) {
    return object[inputKey]
  }
//Kata 6
function findFirstOdd(numbers) {
    for (let oddNums of numbers){
      if (oddNums % 2 === 1){
        return oddNums
      }
    }
  };
//Kata 7
function findEvenLengthStrings(items) {
    const newEvenArr = []
    for (const evenLengthStr of items){
      if (evenLengthStr && evenLengthStr.length > 1 && evenLengthStr.length % 2 == 0){
        newEvenArr.push(evenLengthStr)
      }
    }
    return newEvenArr;
  }
//Kata 8
function isThisAPalindrome(str1) {
    const strArr = str1.split("");
    const revStrArr = strArr.reverse();
    const backwardStr = revStrArr.join("")
    return backwardStr === str1
}
    
    /*if(backwardStr === str1){
      return true
    } else{
      return false;
    }
  }*/


//Kata 9
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
//Kata 10
function checkIsPrime(num) {
  if (num === 1){
    return false
  }
  for (let i = num - 1; i > 1; i--){
    if (num % i === 0){
      return false;
    }
  }
  return true;
}
//Kata 11
function greetGuests (name) {
  let newName = name.charAt(0).toUpperCase() + name.slice(1);
  return `Hello ${newName}!`;

}
//Kata 12
function findTicketPrices (emailString) {
  let strArr = emailString.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (!Number.isNaN(parseInt(strArr[i]))) {
      return true;
    }
  }
  return false;
}
//Kata 13
function makeGuestList(person) {
  const splitName = person.name.split(" ");
  person.firstName = splitName[0]
  person.lastName = splitName[1]
  delete person.name
  return person;
}
//Kata 14
function trackAttendees(person, ticketCost) {
  person.paidForTicket = parseInt(ticketCost)
  return person;
}
//Kata 15
function isPartyViable(guests) {
  let total = 0;
  for (let guest of guests){
    total = guest.paidForTicket + total
  }
  if (total >= 100 && guests.length > 5){
    return true;
  }
  return false;
}
//Kata 16
function orderSupplies(supplies, guests) {
  let total = 0
  for (let item in supplies){
    total = supplies[item] + total
  }
  let finaltotal = total * guests;
  return finaltotal;
}
//Kata 17
function calculateTables (guests, seats) {
  return{
    tables: Math.floor(guests / seats), // floor rounds down to get the amount of tables
    remainingGuests: guests % seats
  }
}
//Kata 18
function calculateTaxiFare(seconds) {
  let minutes = Math.ceil(seconds / 60) - 3;
  let price = 500
  if (minutes > 0){
    price = price + minutes * 70
  }
  return price;

}
//Kata 19
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
//Kata 20
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