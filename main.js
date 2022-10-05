const prompt = require('prompt-sync')({sigint: true});

console.log("Welcome to the To-Do List Manager Application!");

console.log("~ Select an action ~");
console.log("[1] Create a to-do item");
console.log("[2] Complete a to-do item");
console.log("[3] Exit To-do list Application");

let option = Number(prompt("> "));
let toDoList = [];
let statusArray = [];

while(option !== 3){
    if(option === 1)
    {console.log("\n~ Create a to-do item ~ "); 
    console.log("What is this to-do item called?");
//add to do item

    let addItem = prompt("> ");
    while(addItem.length === 0){
        console.log("Invalid: Input cannot be empty Try again.");
        addItem = prompt("> ");
    }
    toDoList.push(addItem);
    statusArray.push(false);


    displayList();
    //reprompt the user
    selectOption();
   }

else if(option === 2){
    if(toDoList.length !== 0){
    console.log("\nComplete a to-do item");
    console.log("Which to-do item would you like to complete?")
    
let newStatus = Number(prompt("> "));
displayList();

while(isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1){
    console.log("Please input a number that corresponds to an item in the list: "); 
newStatus = Number(prompt("> "));

}
statusArray[newStatus - 1] = true;


} else{console.log("Please add an item to your to-do list before trying to complete an item.");
}



    //complete an item
    displayList();
    //reprompt the user
    selectOption();




}else{console.log("\nInvalid operation");

//reprompt the user
selectOption();
}
}
//Exiting Application
console.log(" ~ Exiting To-do List Application ~ ");




function selectOption(){

console.log("\n~ Select an action ~");
console.log("[1] Create a to-do item");
console.log("[2] Complete a to-do item");
console.log("[3] Exit To-do list Application");
option = Number(prompt("> "))
}

function displayList(){

    if(toDoList.length === 0){
        console.log("Your to-do list is empty.")
    } else{console.log(`You have ${toDoList.length} to-do item(s)`);
    }
for(let i = 0;i < toDoList.length;i++){
    // to account for that numbers start at 1 not 0 - i+1
    //toDoList[i]
    let status = "";
    if(statusArray[i] === false){ status = "[incomplete]"
} else if(statusArray[i] === true){ status = "[complete]"
}

console.log(`${i + 1}. ${status} ${toDoList[i]}`);
}
}




/*

1.Figure out the UI
   -console.log()
  -welcome message
  -different options(add task, complete task)
  -error messages for invalid options
 -spacing/separators to make it look nice
-prompts
  -numbers to decide which option using if statements
  1 adding a task/create an item - prompt user for item to create
  2 mark task as complete - prompt user for which task is complete
  3 exit

  - while loop
  program has no known ending, so we want to be able to prompt the indefinitely/until they decide to exit
  -display the to-do list to the user
    -completion status(complete or incomplete)
    -the name of the item
    -the number associated with the item
    -loop to display each item in the todo list





2.Add to do items (choice === 1)
-prompt for the to-do item
-save the item by storing it in an array - .push()
- an array to keep track of toDo items -global variable(can access from anywhere in code)


2.5 - how do we set items to be incomplete
//any item in the list is [incomplete] until we mark it [complete]
- whenever we add an item to the to do list it is [imcomplete] by default

array of booleans 
[ true,       false,     true] status array
["Walk Dog", "Get food","Run mile"]toDoList array shared index
  0           1          2  shared index

  true = [complete]
  false = [incomplete]

  let status = [];
  by default, when we add a new item, we want to add a false boolean to our status array.



3.complete to do items
-display current items in the toDo list w/ their status
-pick which toDo item to mark as complete - swap its status from false to true
-make sure we display the updated list right after








*/