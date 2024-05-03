import inquirer from "inquirer";
let todos = [];
// let condition = true;
//  while(condition)
//  {
//  let addTask = await inquirer.prompt(
//     [
//         {
//             name: "todo",
//             message: "What you want to add in your todos?",
//             type: "input"
//         },
//         {
//             name: "addMore",
//             message: "Do you want to add more?",
//             type: "confirm",
//             default: "fasle"
//         }
//     ]
//  );
//  todos.push(addTask.todo);
//  condition = addTask.addMore
//  console.log(todos);
// }
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "select an operation",
            choices: ["Add", "Update", "View", "Delete", "Exit"]
        });
        if (ans.select == "Add") {
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Add items in the list"
            });
            todos.push(addTodo.todo);
            todos.forEach((todo, index) => console.log(`${index}: ${todo}`));
            //console.log(todos);
        }
        if (ans.select == "Update") {
            let updateTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "Update items in the list",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Add items in the list"
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            todos.forEach((todo, index) => console.log(`${index}: ${todo}`));
            //console.log(todos);
        }
        if (ans.select == "View") {
            console.log("*** To Do List***");
            todos.forEach((todo, index) => console.log(`${index}: ${todo}`));
            //console.log(todos);
            console.log("***************");
        }
        if (ans.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "Delete items in the list",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            todos.forEach((todo, index) => console.log(`${index}: ${todo}`));
            //console.log(todos);
        }
        if (ans.select == "Exit") {
            break;
        }
    } while (true);
}
createTodo(todos);
