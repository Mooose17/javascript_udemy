let input = prompt("Please Enter a Command!");

const todos = ["Collect eggs", "Clean bathroom"]

while(input !== "quit" && input !== "q"){
    if(input === "list"){
        console.log("******************")
        for(let i = 0; i< todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("******************")
    } else if( input === "new"){
        const newTodo = prompt("What is your new todo?")
        todos.push(newTodo);
        console.log(`${newTodo} has been added to your list!`)
    } else if( input === "del"){
        const index = parseInt(prompt("What index number would you like to delete?"));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index,1)
            console.log(`you have deleted ${deleted[0]}`)
        } else{
            console.log("Index number not recognised.")
        }
    }
    input = prompt("Please Enter a valid Command!");
}
console.log("You have quit the app!")

