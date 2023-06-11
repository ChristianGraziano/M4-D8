const activeQuery = new URLSearchParams(window.location.search);
const activeId = activeQuery.get("idDetail");

const endpointUrl = "https://striveschool-api.herokuapp.com/api/product/";

// CHIAVE DI AUTORIZZAZZIONE DELL'API
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNWFkZGI5YzBmNzAwMTQ0ODRmOTEiLCJpYXQiOjE2ODYxNzI4ODksImV4cCI6MTY4NzM4MjQ4OX0.Mg-JAyhjl55pvxtH4Fr_YPdMZn1L3g6Rg0u9d5zGRJo";


// ELEMENTI DEL DOM
let cardContainer = document.getElementById('card-container');
const spinner = document.getElementById('spinner');

// FUNZIONE PER FAR COMPARIRE IL PRODOTTO A SCHERMO CON LA CHIAMATA API
async function showProduct() {
    spinner.classList.remove("d-none");
    let idEnpoint = endpointUrl + activeId;
    const res = await fetch(idEnpoint,{
        headers: 
        { Authorization: "Bearer " + token}
    }) ;
    
    const json = await res.json();
    createTemplete(json);
    spinner.classList.add("d-none");
}

 window.onload = showProduct();

// FUNZIONE PER CREARE IL TEMPLATE
 function createTemplete(product) {
    let card = document.createElement('div');
    
    card.classList.add("card-dettagli-grande","card", "p-0", "mb-3", "flex-column" ,"justify-content-between", "shadow", "text-center", "style-card")
    let Img = document.createElement('img');
    Img.src = product.imageUrl;
    Img.classList.add();

    let Title = document.createElement('h5');
    Title.innerText = product.name;

    let brand = document.createElement('h6');
    brand.innerText =product.brand;

    let description = document.createElement('p');
    description.innerText= product.description;
    
    
    let Price = document.createElement('p');
    Price.innerText = product.price + " " + "$";
    Price.classList.add("text-center", "fw-bold")
    
    
    card.appendChild(Img);
    card.appendChild(Title);
    card.appendChild(brand);
    card.appendChild(description);
    card.appendChild(Price);

    cardContainer.appendChild(card);

}