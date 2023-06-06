
const endpointUrl = "https://striveschool-api.herokuapp.com/api/product/";


// CHIAVE DI AUTORIZZAZZIONE DELL'API
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNWFkZGI5YzBmNzAwMTQ0ODRmOTEiLCJpYXQiOjE2ODYwNzgyMTEsImV4cCI6MTY4NzI4NzgxMX0.C_vJz6qNebZzL9M4B1sGZek-lAyaPnuyynZokRJtN6Y"

// ELEMENTI DEL DOM

let cardContainer = document.getElementById('card-container');


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

 getProduct();

 // FUNZIONE PER CREARE I TEMPLATE DELLE CARD
 
 function createTemplete(product) {
    let card = document.createElement('div');
    card.classList.add("col-12","col-md-4", "col-lg-3","card", "p-0","mb-3", "flex-column" ,"justify-content-between", "shadow", "text-center")
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
    ButtonDetail.classList.add("btn", "btn-success", "mx-5", "my-2")
    ButtonDetail.innerText =("Details");

    card.appendChild(Img);
    card.appendChild(Title);
    card.appendChild(Price);
    card.appendChild(ButtonCart);
    card.appendChild(ButtonDetail);

    cardContainer.appendChild(card);

}
