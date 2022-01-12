let taskInput = document.getElementById('taskInput');
let taskAddBtn = document.getElementById('taskAddBtn');
let notask = document.getElementById('notask');
let allTasks = document.getElementById('allTasks');
let invalidMessage = document.getElementById('invalidMessage');
let closeInvalidMessage = document.getElementById('invalidMessage');

let closeInvalidMessageFunc = ()=>{
    invalidMessage.classList.add('none')
}

closeInvalidMessage.addEventListener('click',closeInvalidMessageFunc)


let addtask= ()=>{
taskData = taskInput.value
if(taskData.length  < 3 || taskData.trim() ==''){
    invalidMessage.classList.remove('none')
}else{
    notask.classList.add('none')
    allTasks.innerHTML += `<div class="alert alert-info "> ${taskData} 
        <button class="btn btn-danger float-right delet"> Remove </button>
    </div>`
    taskInput.value ="";
}
}



taskAddBtn.addEventListener('click',addtask)
document.addEventListener('click', function(e){
    if(e.target.classList.contains('delet')){
        e.target.parentElement.remove();
        if(allTasks.children.length == 0){
            notask.classList.remove('none')
        }
    }
})
