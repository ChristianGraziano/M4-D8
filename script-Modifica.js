

const activeQuery = new URLSearchParams(window.location.search);
const activeId = activeQuery.get("id");

const endpointUrl = "https://striveschool-api.herokuapp.com/api/product/";


// CHIAVE DI AUTORIZZAZZIONE DELL'API
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNWFkZGI5YzBmNzAwMTQ0ODRmOTEiLCJpYXQiOjE2ODYxNzI4ODksImV4cCI6MTY4NzM4MjQ4OX0.Mg-JAyhjl55pvxtH4Fr_YPdMZn1L3g6Rg0u9d5zGRJo";

// ELEMENTI DEL DOM

const nameInput = document.getElementById("inputName");
const descInput = document.getElementById("inputDesc");
const brandInput = document.getElementById("inputBrand");
const imgInput = document.getElementById("imgUrl");
const priceInput = document.getElementById("inputPrice");
const buttonForm = document.getElementById("addBtn");

// Recupero il singolo post al caricamento della pagina:
window.onload = showPost();

async function showPost() {
    let idEnpoint = endpointUrl + activeId;
    const res = await fetch(idEnpoint,{
        headers: 
        { Authorization: "Bearer " + token}
    }) ;
    
    const json = await res.json();
    // Riempio i campi degli input associati al post:
    nameInput.value = json.name;
    descInput.value = json.description;
    brandInput.value = json.brand;
    imgInput.value = json.imageUrl;
    priceInput.value = json.price;
}
