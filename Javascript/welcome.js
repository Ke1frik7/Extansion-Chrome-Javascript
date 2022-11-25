let form = document.querySelector(".js__form")
const input = document.querySelector(".name__input")
const greating = document.querySelector(".welcome__name")
const remove = document.querySelector(".remove__name")

const userLS = "currentUser"
const showClassName = "showing"

const handleSub = (event) => {
    event.preventDefault()
    const currentValue = input.value
    printName(currentValue) // textContent ga quyishi uchun 
    saveName(currentValue) // storage ga saqlashi uchun ... 
}
function askName(){
    form.classList.add(showClassName)
    form.addEventListener("submit", handleSub)
}
function printName(text){
    form.classList.remove(showClassName)
    remove.classList.add(showClassName)
    greating.classList.add(showClassName)
    greating.textContent = text
}
function saveName(text){
    window.localStorage.setItem(userLS, text)
    // currentUser nomi bn text ya'ni kiritgan name imiz saqlaniyapti .. 
}
function removeItem(){
    window.localStorage.removeItem(userLS)
}
remove.addEventListener("click", removeItem)
function loadName(){
    const currentUser = localStorage.getItem(userLS)
    // shu ma'lumot orqasida qanaqadir qiymat bulmasa u holda form chiqadi aks holda ya'ni qiymat bu'lsa chiqmaydi .. 
    if(currentUser === null){
        askName(); // form lar show buladi
    }else{
        printName(currentUser)// form lar none buladi va welcome lar ga show buladi ... 
    }
}
loadName()