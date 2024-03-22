import inquirer from "inquirer";


interface Task{
    id: number;
    name: string;
    completed: boolean;
}

const tasks: Task[] =[];
let taskId = 1;

async function main(){
    while (true){
        const {choice} = await inquirer.prompt({
            type: "list",
            name:"choice",
            message:"Choose an option:",
            choices: ["Add task", "View Task","Exit",],
        });

        if(choice === "Add task"){

            const {taskName} = await inquirer.prompt({
                type: "input",
                name:"taskName",
                message:"enter the task name:",
            });

            tasks.push({
                id:taskId++,
                name: taskName,
                completed: false
            });
            console.log("Task Added successfully!")

        } else if(choice === "View Task"){
            if (tasks.length === 0){
                console.log("No task available.")
            } else{
                console.log("Current Tasks:");
                tasks.forEach((tasks) =>{
                    const status = tasks.completed ?"[Completed]" : "[Pending]";
                    console.log(`${tasks.id}. ${status} ${tasks.name}`);
                });
            }
        }else if( choice === "Exit"){
            console.log("exiting task manager.");
            break;
        }

    }
}


main();