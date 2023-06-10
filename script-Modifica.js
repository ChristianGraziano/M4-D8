

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
const errorAlert = document.getElementById("empty-fields");
const editDone = document.getElementById("edit-done");

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


// ADD EVENT LISTENER CHE CONFERMA LA MODIFICA DEL PRODOTTO

buttonForm.addEventListener("click", changeProduct);

// FUNZIONE PER MODIFICARE L'API CON IL PUT

async function changeProduct() {
    if(nameInput.value && descInput.value && brandInput.value && imgInput.value && priceInput.value) {
        
        
        const newPayload = {
            "name": nameInput.value,
            "description": descInput.value,
            "brand": brandInput.value,
            "imageUrl": imgInput.value,
            "price": priceInput.value
        };
        const idEndpoint =  endpointUrl + activeId;
        const createResult = await fetch(idEndpoint, {
            method: "PUT",
            body: JSON.stringify(newPayload),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            }
        });
        editDone.classList.toggle("d-none");
            setTimeout(() => {
                editDone.classList.toggle("d-none");
            }, 5000);
        } else {
        errorAlert.classList.remove("d-none");
        setTimeout(() => {
            errorAlert.classList.add("d-none");
        }, 2500);
    }
}
