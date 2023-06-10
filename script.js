
const endpointUrl = "https://striveschool-api.herokuapp.com/api/product/";


// CHIAVE DI AUTORIZZAZZIONE DELL'API
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNWFkZGI5YzBmNzAwMTQ0ODRmOTEiLCJpYXQiOjE2ODYwNzgyMTEsImV4cCI6MTY4NzI4NzgxMX0.C_vJz6qNebZzL9M4B1sGZek-lAyaPnuyynZokRJtN6Y"

// ELEMENTI DEL DOM

let cardContainer = document.getElementById('card-container');
let searchButtonNav = document.getElementById('button-search-navbar');
let inputSearchNav = document.getElementById('search-field');


// CHIAMATA DELL'API CHE FA VISUALIZZARE TUTTI I PRODOTTI A SCHERMO

async function getProduct() {
    try {
        const res = await fetch(endpointUrl, {
            headers: 
            { Authorization: "Bearer " + token}
        });
        const json = await res.json();
         json.forEach(product => {
            createTemplete(product)
         });
        myData = json
    } catch (error) {
        console.log(error);
    }
}

 window.onload = getProduct();


// EVENT LISTENER PER LA RICERCA SUL BOTTONE DELLA NAVBAR
 searchButtonNav.addEventListener("click", makeSearch);
// FUNZIONE PER LA RICERCA 
 async function makeSearch() {
    let searchValue = inputSearchNav.value.toLowerCase();
    cardContainer.innerHTML=""; 
        let promise = await fetch(endpointUrl, {
            headers: {Authorization: "Bearer " + token,}
        });
        let response = await promise.json();
     
     response.forEach((product) => {
        let nameItem = product.name.toLowerCase();
        if(nameItem.includes(searchValue)) {
            createTemplete(product);
            }
        });
    }


     

 // FUNZIONE PER CREARE I TEMPLATE DELLE CARD
 
 function createTemplete(product) {
    let card = document.createElement('div');
    let idProduct = product._id;
    card.classList.add("col-12","col-md-4", "col-lg-3","card", "p-0","mb-3", "flex-column" ,"justify-content-between", "shadow", "text-center", "style-card")
    let Img = document.createElement('img');
    Img.src = product.imageUrl;
    Img.classList.add();

    let Title = document.createElement('h5');
    Title.innerText = product.name;
    
    
    let Price = document.createElement('p');
    Price.innerText = product.price + " " + "$";
    Price.classList.add("text-center", "fw-bold")
    
    let ButtonCart = document.createElement('button');
    ButtonCart.classList.add("btn", "btn-info", "mx-3", "button-cart");
    ButtonCart.innerText =("Add To Cart");
    
    let ButtonDetail = document.createElement('a');
    ButtonDetail.classList.add("btn", "btn-success", "mx-5", "my-2");
    ButtonDetail.innerText =("Details");
    ButtonDetail.href = `dettagli.html?idDetail=${product._id}`;
    ButtonDetail.target= "_blanck";
    
    ButtonDetail.addEventListener("click", console.log(product._id));
    

    card.appendChild(Img);
    card.appendChild(Title);
    card.appendChild(Price);
    card.appendChild(ButtonCart);
    card.appendChild(ButtonDetail);

    cardContainer.appendChild(card);

}
