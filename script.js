const form = document.querySelector("form")
const btnList = document.getElementById("productList")
const name = document.getElementById("productName")
const price = document.getElementById("productPrice")
btnList.addEventListener('click', async (event) => {

    const promise = await fetch("http://localhost:3000/products")
    const json = await promise.json()
    console.log(...json)
})
form.addEventListener('submit', async (event) => {
    event.preventDefault()
    await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: name.value,
            price: price.value
        })
    })
})