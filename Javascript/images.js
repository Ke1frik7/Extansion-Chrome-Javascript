// unsplash img => for loop render (Event loop (5s) => {})
const generateImagesNum = 1
const renderItem = () => {
    fetch(`https://source.unsplash.com/1600x900/?beach`) 
    // beach sohil 
    // shunaqa qilib unsplash ga surov yuborsak unda img response ni uziga kelar ekan ya'ni data da undifiened chiqayapti
    .then((response) => {
        let item  = document.createElement("div")
        item.className = "item"
        let img = document.createElement("img")
        img.src = response.url
        img.className = "random__image"
        item.appendChild(img)
        document.body.appendChild(item)
    })
}
for(let i = 0; i< generateImagesNum; i++){
    renderItem();
}
// har gal refresh bulganda ya'ni sahifa yangilanaverganda yangi rasm chiqishi uchun shu yul as qotqar ekan ..  