console.log('hola')

const URL_API = "https://rickandmortyapi.com/api";

const loadCharacters = () => fetch(URL_API+'/character').then(response => response.json());

const buildCharacter = ({name, status, species, image}) => {
    return `
    <div syle='display:inline'>
        <div class='character'>
            <img src='${image}'>
            <p>
                <b>${name}</b
                <br>
                <br>
                <br>
                ${status}
                <br>
                <br>
                ${species}
            </p>
        </div>
    </div>
  `;
};

const buildCharactersList = (data) => {
    let characterList = document.createElement("div");

    if(data?.results?.length > 0){
        let allCharacters = '';

        data.results.map( (element) =>{
            console.log(element)
            allCharacters+=buildCharacter(element)
        });

        characterList.innerHTML = allCharacters;
    }


    return characterList;
};

const drawCharacters = (data) => {
    let currentCharacters = document.getElementById('characters');
    let newCharacters = buildCharactersList(data);

    currentCharacters.appendChild(newCharacters)
};


loadCharacters().then(data => drawCharacters(data));