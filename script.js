
let apiUrl = "https://striveschool-api.herokuapp.com/api/product/";


// CHIAVE DI AUTORIZZAZZIONE DELL'API
let Key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.        eyJfaWQiOiI2NDdmNWFkZGI5YzBmNzAwMTQ0ODRmOTEiLCJpYXQiOjE2ODYwNjc5MzMsImV4cCI6MTY4NzI3NzUzM30.RLx1A7ZTsROV1W5qVxJrE1HqND3L1mnNS56tEuGYU8M";

// ELEMENTI DEL DOM

let ContainerCard = document.getElementById('card-container');


// CHIAMATA DELL'API

async function getProduct() {
    const response = await fetch(apiUrl);
}