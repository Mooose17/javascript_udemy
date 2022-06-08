const SECRET = "BabyHippo";

let guess = prompt("Password")

while (guess !== SECRET){
    guess = prompt("Password")
}
console.log("Im In")