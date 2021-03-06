//! Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


//! Event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck)


//! Function
function addTodo(event){
    //Prevent from from submitting
    event.preventDefault()
    //  Create Todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');

    //Create LI
    const newTodo =document.createElement('li')
    newTodo.innerText=todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    //CHECK MARK BUTTON
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)

    //TRASH BUTTON
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    //APPEND TO LIST
    todoList.appendChild(todoDiv)

    //Clear Todo INPUT VALUE
    todoInput.value = ""
}

function deleteCheck(e){
    // console.log(e.target)
   
    const item =e.target;
   
    //DELETE TODO
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement
        //Amimation
        todo.classList.add('fall')
        todo.addEventListener('transitionend',function(){
            todo.remove()
        })
    }

    //CHECK MARK
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement
        todo.classList.toggle("completed")
    }

      
}