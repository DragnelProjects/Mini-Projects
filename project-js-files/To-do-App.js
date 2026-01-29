const addTask = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

window.addEventListener("load", showTask);
function addTasks() {
  const task = taskInput.value.trim();

  if (task === "") return;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (tasks.length < 5) {
    tasks.push({ text: task, done: false });
  } else {
    taskCount.innerText = `You can't have more then 5 tasks`;
    return;
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";

  showTask();
}
function showTask() {
  taskList.innerHTML = "";

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((taskObj, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const taskText = document.createElement("span");
    taskText.innerText = taskObj.text;
    taskText.classList.add("work");

    if (taskObj.done) {
      taskDiv.style.opacity = "0.5";
      taskText.style.textDecoration = "line-through";
    }

    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = " <i class='bx  bx-check'></i>";
    doneBtn.classList.add("done");

    doneBtn.addEventListener("click", () => {
      tasks[index].done = !tasks[index].done;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showTask();
    });

    const deletBtn = document.createElement("button");
    deletBtn.innerHTML = "<i class='bx  bx-trash'></i>";
    deletBtn.classList.add("delet");

    deletBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showTask();
    });

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(doneBtn);
    taskDiv.appendChild(deletBtn);

    taskList.appendChild(taskDiv);

  });
  function toCountTask() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (tasks.length < 6) {
      taskCount.innerText = `No. of tasks to do is ${tasks.length}`;
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  toCountTask();
};

addTask.addEventListener("click", addTasks);
