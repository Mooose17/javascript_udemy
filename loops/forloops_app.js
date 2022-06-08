//For loops//

/*
for(
    [initialExpression];
    [condition];
    [incrementExpression]
)
*/
//using a for loop to increment
for(let i = 1; i<=6; i++){
    console.log("Da ba dee da be daa");
}
//using a for loop to decrement
for(let i = 25; i>=0; i-=5){
    console.log(i)
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for(let i = 0; i < people.length; i++){
    console.log(people[i].toUpperCase())
}

const seatingChart = [
    ["Sam", "Bill", "Harry"],
    ["Juan", "Troy", "Duke", "Lola"],
    ["Kris", "Hattie", "Paul"]
];

for(let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
        console.log(`Row #${i + 1}`)
        for( let j = 0; j < row.length; j++){
            console.log(row[j])
        }
}
//#1For loop is turning whole array into three subarrays under the i var.
//then we use the x[i] as a new var to iterate further
//#2For loop uses new var to loop over x to iterate array into indivdual arrays which are strings in this case.

const row1 = ["Ed", "Edd", "Eddie"]

for(let i = 0; i< row1.length; i++){
    console.log(row1[i])
}

