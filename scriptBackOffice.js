const endpointUrl = "https://striveschool-api.herokuapp.com/api/product/";


// CHIAVE DI AUTORIZZAZZIONE DELL'API
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNWFkZGI5YzBmNzAwMTQ0ODRmOTEiLCJpYXQiOjE2ODYxNzI4ODksImV4cCI6MTY4NzM4MjQ4OX0.Mg-JAyhjl55pvxtH4Fr_YPdMZn1L3g6Rg0u9d5zGRJo"

// ELEMENTI DEL DOM

let resultBox = document.getElementById('result-box');
const nameInput = document.getElementById("inputName");
const descInput = document.getElementById("inputDesc");
const brandInput = document.getElementById("inputBrand");
const imgInput = document.getElementById("imgUrl");
const priceInput = document.getElementById("inputPrice");
const buttonForm = document.getElementById("addBtn");
const errorAlert =  document.getElementById("empty-fields");


// CHIAMATA DELL'API CHE FA VISUALIZZARE TUTTI I PRODOTTI A SCHERMO

async function getProduct() {
    try {
        const res = await fetch(endpointUrl, {
            headers: 
            { Authorization: "Bearer " + token}
        });
        const json = await res.json();
         json.forEach(product => {
            createPost(product)
         });
        myData = json
    } catch (error) {
        console.log(error);
    }
}

 window.onload = getProduct();


// ADD EVENT LISTENER DEL BOTTONE DEL FORM PER AGGIUNGERE PRODOTTI
buttonForm.addEventListener("click", addNewPost);


// FUNZIONE PER AGGIUNGERE UN NUOVO OGGETTO(POST)

async function addNewPost() {
    if(nameInput.value && descInput.value && brandInput.value && imgInput.value && priceInput.value) {
        const payload = {
            "name": nameInput.value,
            "description": descInput.value,
            "brand": brandInput.value,
            "imageUrl": imgInput.value,
            "price": priceInput.value
        };
        const createResult = await fetch(endpointUrl, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            }
        });
        nameInput.value = "";
        descInput.value = "";
        brandInput.value = "";
        imgInput.value = "";
        priceInput.value = "";
        
    }
    else {
        errorAlert.classList.remove("d-none");
        setTimeout(() => {
            errorAlert.classList.add("d-none");
        }, 2500);
    }
}



// FUNZIONE PER CREARE IL TEMPLATE DELLA TABELLA

function createPost(product) {
    let riga = document.createElement('tr');
    let nameProduct = document.createElement('td');
    nameProduct.innerText = product.name;

    let descProduct = document.createElement('td');
    descProduct.innerText = product.description;
    
    let brandProduct = document.createElement('td');
    brandProduct.innerText = product.brand;

    let imageProduct = document.createElement('td');
    imageProduct.src = product.imageUrl;

    let priceProduct = document.createElement('td');
    priceProduct.innerText = product.price;

    let actionsButton = document.createElement('td');

    const editBtn = document.createElement("button");
    editBtn.classList.add("btn", "btn-sm", "mx-1", "btn-primary", "mb-1");
    const editImg = document.createElement("i");
    editImg.classList.add("fa-solid", "fa-pencil", "me-1");
    const editTxt = document.createElement("span");
    editTxt.innerText = "Edit";
    editBtn.append(editImg, editTxt);
   

    const delBtn = document.createElement("button");
    delBtn.classList.add("btn", "btn-sm", "mx-1", "btn-danger");
    const delImg = document.createElement("i");
    delImg.classList.add("fa-solid", "fa-trash", "me-1");
    const delTxt = document.createElement("span");
    delTxt.innerText = "Delete";
    delBtn.append(delImg, delTxt);
    
    actionsButton.append(editBtn, delBtn)
    resultBox.appendChild(riga);
    riga.append (nameProduct, descProduct, brandProduct, imageProduct, priceProduct, actionsButton)

}
