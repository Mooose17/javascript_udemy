const seatingChart = [
    ["Sam", "Bill", "Harry"],
    ["Juan", "Troy", "Duke", "Lola"],
    ["Kris", "Hattie", "Paul"]
];

/* for(let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
        console.log(`Row #${i + 1}`)
        for( let j = 0; j < row.length; j++){
            console.log(row[j])
        }
}
*/
// or i could use a for of loop!!!
/*
for(let rows of seatingChart){
    for(let students of rows){
        console.log(students);
    }
}
*/
// For in loops

let album = {
    name:"nurture",
    artist:"Porter Robinson",
    genre:"Dance",
    year:"2021",
    gay:true
}

for(const albumData in album){
    console.log(`This is the ${albumData} which is also ${album[albumData]}`)
};

function isPartyViable(guests) {
    let total = 0;  //used to add up guest paidforticket amount
    for (let guest of guests){
      total = guest.paidForTicket + total // loops over all guests in [guests]
    }
    if (total >= 100 & guests.length > 5){
      return true;
    }
    return false;
  }