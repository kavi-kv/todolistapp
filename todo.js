const newTask = document.querySelector(".add-task-btn");
const addTaskBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");
const taskList = document.querySelector(".task-list");
const taskTemplate = document.querySelector("#task-templete");

let id = 1;

//?: adding a new value
newTask.addEventListener("keyup", (e) => {
    if(e.keyCode === 13 && inputValid()){
        addTask();
    }
})

//?:clicking the add button
addTaskBtn.addEventListener("click", () => {
    if(inputValid()){
        addTask();
    }
})

//?: Removing an existing task
removeBtn.addEventListener("click", ()=> {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((task) => {
        const checked = task.querySelector("input").checked;
        if(checked){
            task.remove();
        }
    })
})

//?: Adding a task
function addTask(){
    const taskElement = document.importNode(taskTemplate.content,true);
    const checkbox = taskElement.querySelector("input");
    checkbox.id = id;
    const label = taskElement.querySelector("label");
    label.htmlFor = id;
    label.append(newTask.value)
    taskList.appendChild(taskElement);
    newTask.value = "";
    id++;
}

function inputValid() {
    return newTask.value !== "";
}