const todoList = document.getElementById('todo-list')
const todoInput = document.getElementById('input')
const todoButton = document.getElementById('button')
const todoFilter = document.getElementById('filter')

const getTodosFromStorage = () =>{
    const storage = JSON.parse(localStorage.getItem('todos'))
    return (storage) ? storage : []
}

const getDonesFromStorage = () =>{
    const storage = JSON.parse(localStorage.getItem('dones'))
    return (storage) ? storage : []
}

const todos = getTodosFromStorage()
const dones = getDonesFromStorage()

const getTodosToPage = () => {
    todos.forEach((todo) =>{
        createTodoItem(todo)
    })
}

const getDonesToPage = () => {
    dones.forEach((done) => {
        createDoneItem(done)        
    });
}

const saveTodosToStorage =(todo) =>{
    todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(todos))
    createTodoItem(todo)
}

todoButton.addEventListener('click',()=>{
    const input = todoInput.value
    if(input) saveTodosToStorage(input)
    todoInput.value = ""
})

window.addEventListener('load',() =>{
    getTodosToPage()
    getDonesToPage()
})

const removeTodo = (target) =>{
    const todo = target.parentNode.childNodes[0].innerHTML
    removeTodoFromStorage(todo)
    target.parentNode.remove()
}
const removeTodoFromStorage = (todo) =>{
    const index = todos.indexOf(todo)
    if(index>-1){
        todos.splice(index,1)
        localStorage.setItem('todos',JSON.stringify(todos))
    }
}
const removeDone = (target) =>{
    const done = target.parentNode.childNodes[0].innerHTML
    removeDoneFromStorage(done)
    target.parentNode.remove()
}
const removeDoneFromStorage = (done) =>{
    const index = dones.indexOf(done)
    if(index>-1){
        dones.splice(index,1)
        localStorage.setItem('dones',JSON.stringify(dones))
    }
}

const checkTodo = (target) =>{
    const todo = target.parentNode.childNodes[0].innerHTML
    moveTodoToDone(todo,target);
}

const moveTodoToDone =(todo,target) =>{
    removeTodoFromStorage(todo)
    dones.push(todo)
    localStorage.setItem('dones',JSON.stringify(dones))
    makeDone(target)
}

const moveDoneToTodos = (done,target)=>{
    removeDoneFromStorage(done)
    todos.push()
    localStorage.setItem('todos',JSON.stringify(todos))
    makeTodo(target)

}

const makeDone =(target) =>{
    const done = target.parentNode.classList.add('done')
    target.parentNode.classList.remove('todo')
    target.parentNode.childNodes[2].setAttribute('onclick','removeDone(this)')
    target.className = ''
    target.classList.add('fas','fa-check-square')
    target.setAttribute('onclick','uncheckDone(this)')
}

const makeTodo =(target) =>{
    const todo = target.parentNode.classList.add('todo')
    target.parentNode.classList.remove('done')
    target.parentNode.childNodes[2].setAttribute('onclick','removeTodo(this)')
    target.className = ''
    target.classList.add('fas','fa-square')
    target.setAttribute('onclick','checkDone(this)')
}

const uncheckDone = (target) =>{
    const done = target.parentNode.childNodes[0].innerHTML
    moveDoneToTodos(done,target)

}

todoInput.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13) todoButton.click()
})

const createTodoItem = (text)=>{
    const todoItem = document.createElement('div')
    todoItem.classList.add('todo-item','todo')
    const todoItemLi = document.createElement('li')
    todoItemLi.innerHTML= text
    const todoItemCheck = document.createElement('i')
    todoItemCheck.classList.add('fas','fa-square')
    todoItemCheck.setAttribute('onclick','checkTodo(this)')
    const todoItemRemove = document.createElement('i')
    todoItemRemove.classList.add('fas','fa-trash-alt')
    todoItemRemove.setAttribute('onclick','removeTodo(this)')
    todoItem.appendChild(todoItemLi)
    todoItem.appendChild(todoItemCheck)
    todoItem.appendChild(todoItemRemove)
    todoList.appendChild(todoItem)

}

const createDoneItem = (text)=>{
    const todoItem = document.createElement('div')
    todoItem.classList.add('todo-item','done')
    const todoItemLi = document.createElement('li')
    todoItemLi.innerHTML= text
    const todoItemCheck = document.createElement('i')
    todoItemCheck.classList.add('fas','fa-square')
    todoItemCheck.setAttribute('onclick','uncheckDone(this)')
    const todoItemRemove = document.createElement('i')
    todoItemRemove.classList.add('fas','fa-trash-alt')
    todoItemRemove.setAttribute('onclick','removeDone(this)')
    todoItem.appendChild(todoItemLi)
    todoItem.appendChild(todoItemCheck)
    todoItem.appendChild(todoItemRemove)
    todoList.appendChild(todoItem)

}

