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

for(let rows of seatingChart){
    for(let students of rows){
        console.log(students);
    }
}