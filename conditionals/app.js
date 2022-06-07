//If statement//
let num = Math.random();

if(num >= 0.5){
    console.log("Num is greater than 0.5!")
    console.log(num)
}

if(num <= 0.5){
    console.log("Num is less than 0.5!")
    console.log(num)
}

//----------------------------------------//
//Else If statement//

const age = 7;

if(age < 5){
    console.log("You are under 5. Free entry.")
} else if(age<15){
    console.log("You are a child. Pay £10 entry fee.")
} else if(age<70){
    console.log("You are ADULT. Pay £30 entry fee.")
} else if(age>=71){
    console.log("Senior discount - £10 entry fee.")
};

// Else if's are sequential and only one will run. //
//----------------------------------------------------//
// Else statements //  

const dayOfWeek = "sdgf";

if(dayOfWeek === "Monday"){
    console.log("UGH Mondays are ass.")
} else if (dayOfWeek === "Friday"){
    console.log("FRIDAYFEELINGYESSSSSS")
} else if (dayOfWeek === "Sunday"){
    console.log("I dont wanna go to work tomorrow;-;")
} else{
    console.log("Day Of Week not seen.")
}
//another example//

function getColor(phrase){

    if(phrase === "stop"){
        console.log("red")
    } else if (phrase === "slow"){
        console.log("yellow")
    } else if (phrase === "go"){
        console.log("green")
    } else{
        console.log("purple")
    }

}
// Else is a catch all //
//----------------------------//

/*
if - "If X returns true - Do this"

if - "If X returns true - Do this"
else if - "If the previous "if" doesnt return true - Do this"

if - "If X returns true - Do this"
else if - "If the previous "if" doesnt return true - Do this"
else - "If nothing is returning true. Do this"
*/

//Logigal Operators//
/*
&& - If X AND Y = True - Return this.
|| - If X OR y = True - Return this.
! - If X does NOT = True - Return This.
*/