const todoForm = document.querySelector(".todos__form")
const todoList = document.getElementById("todos__list")
const todoInput = document.querySelector(".todos__input")

let KEY = "todos"
let toDo = []
const renders = (arr) => {
    todoList.innerHTML = null
    for(let i = 0; i<arr.length; i++){
    const li = document.createElement("li")
    li.id = arr[i].id
    let h4 = document.createElement("h4")
    h4.appendChild(document.createTextNode(arr[i].title))
    let button = document.createElement("button")
    button.appendChild(document.createTextNode("❌"))
    button.addEventListener("click", removeTodo)  
    button.dataset.id = arr[i].id
    li.appendChild(h4)
    li.appendChild(button)
    todoList.appendChild(li)
    }
}
let object;
function removeTodo(event){
    let parent = event.target.parentNode
    let id = event.target.dataset.id
    for(let i = 0; i<toDo.length; i++){
        if(Number(id) === toDo[i].id){
            toDo.splice(i, 1)
            parent.remove()
            window.localStorage.removeItem(KEY, toDo[i])
        }
    }
}
function saveTodo(arr){
    window.localStorage.setItem(KEY, JSON.stringify(arr))
}
function handleSubmit(event){
    event.preventDefault()
    let inputValue = todoInput.value
     object = {
        title: inputValue,
        id: Date.now()
    }
    if(inputValue.length === 0){
        console.log(false)
    }else if(inputValue.length !== 0){
    toDo = [...toDo, object]
    renders(toDo)
    saveTodo(object)
    todoInput.value = " "
    }
}
todoForm.addEventListener("submit", handleSubmit)