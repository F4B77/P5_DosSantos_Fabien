

fetch("http://localhost:3000/api/products")
    .then((response) => response.json())
    .then((data) => addProducts(data))

    function addProducts(donnees) {
        const imageUrl = donnees[0].imageUrl

        let link = document.createElement("a")
        link.href = "http://localhost:3000/images/kanap01.jpeg"
        link.text = "un canapé"

        let items = document.querySelector("#items")
        items.appendChild(link)
    }