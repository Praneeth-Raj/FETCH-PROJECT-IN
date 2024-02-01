
let url = "https://fakestoreapi.com/products";
let total = 4;

function praneeth(){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        const container = document.querySelector(".container");
        container.innerHTML = "";//to clear the previous data

        for(let i=1; i<=total;i++){
            const id1 = data[i].id;
            const product = data[i].image;
            const cost1 = data[i].price;

            const imageCards = document.createElement("div");
            imageCards.classList.add("image-cards");
            container.appendChild(imageCards);

            const id = document.createElement("h3");
            id.innerHTML = "id:" + id1;

            const img = document.createElement("img")
            img.src= product;

            const cost = document.createElement("h3");
            cost.innerHTML = "Price:" + cost1;

            imageCards.append(id);
            imageCards.append(img);
            imageCards.append(cost);
        }
    })
}

document.getElementById("press").addEventListener("click",()=>{
    total = total+4;
    praneeth(total)
})

praneeth(total);