const text = document.getElementById("title")
const author = document.getElementById("author")
const getQueots = async() => {
    let fetching = await fetch("https://type.fit/api/quotes", {
        method: "GET", 
      
    })
    let response = await fetching.json()
    const indx = parseInt(Math.random()
    *response.length)
    text.textContent = response[indx].text
    author.textContent = response[indx].author
    if(response[indx].author === null){
        author.textContent = "Anonymous"
    }
}
getQueots()