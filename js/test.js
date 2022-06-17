const URL_API_FR = "https://www.fruityvice.com/api/fruit/all";

const CORS = { method: "GET", mode: 'no-cors', headers: { 'Access-Control-Allow-Origin': '*',}};

const loadfruits = () => fetch(URL_API_FR, CORS).then(response => console.log(response));

const getMainhtml = () => {
    return doc = document.getElementById("informacionFrutas");
}

const pintarfrutas = (data) => {
    let elementohtml = getMainhtml();

    elementohtml.innerHTML = "<div></div>";

    console.log(data);
}



loadfruits().then(data => console.log(data));