console.log('hola')

const URL_API = "https://rickandmortyapi.com/api";

const loadCharacters = () => fetch(URL_API+'/character').then(response => response.json());

const buildCharacter = ({name, status, species}) => {
    return `
    <li>
      <p><b>${name}</b</p>
      <p>${status}</p>
      <p>${species}</p>
    </li>
  `;
};

const buildCharactersList = (data) => {
    let characterList = document.createElement("div");

    if(data?.results?.length > 0){
        let allCharacters = '';

        data.results.map( (element) =>
            allCharacters+=buildCharacter(element)
        );

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