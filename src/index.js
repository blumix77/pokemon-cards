
const searchBtn = document.querySelector('button');

const inputField = document.getElementById('input');

const card = document.getElementById('card');

searchBtn.addEventListener("click", (event) => {
    let name = inputField.value.toLowerCase();
    async function getPokemon() 
    {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        fetch(url).then((data) => {
            return data.json();
        }).then((jsonData) => {
            return jsonData;
        }).then((data) => {
            card.innerHTML = '';
            let pokemon = data;
            console.log(pokemon);
            card.innerHTML += `<p id="nameElement">${pokemon.name.toUpperCase()}</p>`;
            console.log(pokemon.sprites.front_default);
            pokemon.stats.map((stat,index) => {
                card.innerHTML += `<p>${pokemon.stats[index].stat.name}: ${pokemon.stats[index].base_stat}</p>`;
            });
            pokemon.abilities.map((ability,index) => {
                card.innerHTML += `<p id="abilityElement">ability: ${pokemon.abilities[index].ability.name}</p>`
            });
        card.innerHTML += `<img src="${pokemon.sprites.front_default}" id="imgElement">`;
        }).catch(err => {
        console.log(err);
        });
    }
    getPokemon();
    event.preventDefault();
});

const url = `https://pokeapi.co/api/v2/pokemon-species/`;

console.log(url);






