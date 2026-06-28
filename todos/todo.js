const add = document.querySelector(".addbtn");
const input = document.querySelector(".input");
const todo = document.querySelector(".todo-list")
const clear = document.querySelector(".clrbtn");

     let tasks = JSON.parse(localStorage.getItem("tasks"))  || [];
     renderTasks();
add.addEventListener("click", () => {
    console.log(input.value);
    
  if(input.value.trim()=== "")
  {
    return;
  }
  tasks.push({
    text : input.value,
    completed : false
  });
  saveTasks();
  renderTasks();
  input.value = "";
})

  function saveTasks(){
       localStorage.setItem("tasks", JSON.stringify(tasks));
  }
   function renderTasks(){
     todo.innerHTML = "";
   
    tasks.forEach((task ,index) => {
        const li = document.createElement("li");
        const text = document.createElement("span")
        const box = document.createElement("input");
        const Delete = document.createElement("button");
         Delete.textContent = "delete";
          Delete.classList.add( "del-button");
         box.type = "checkbox";
         box.checked = task.completed;
         
    text.textContent = task.text;
       Delete.addEventListener("click", ()=> {
         tasks.splice(index,1);
         saveTasks();
         renderTasks();
       });
       if(task.completed)
       {
       text.style.textDecoration = "line-through";
}
       
box.addEventListener("change",()=> {
  tasks[index].completed = box.checked;
  saveTasks();
if(box.checked){
    text.style.textDecoration = "line-through";
}
else
{
    text.style.textDecoration = "none";
}

})

      li.appendChild(box);
      li.appendChild(text);
      li.appendChild(Delete);
    todo.appendChild(li);
    input.value = "";
    
   

    });
}
clear.addEventListener("click", ()=>{
  tasks.splice(0, tasks.length);
  saveTasks();
  renderTasks();
})
