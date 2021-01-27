// import functions and grab DOM elements
import { getRandomPokemon } from './utils.js';

let pokeOne = getRandomPokemon();
let pokeTwo = getRandomPokemon();
let pokeThree = getRandomPokemon();

while (pokeOne._id === pokeTwo._id || pokeOne._id === pokeThree._id || pokeTwo.id === pokeThree._id) {
    pokeOne = getRandomPokemon();
    pokeTwo = getRandomPokemon();
    pokeThree = getRandomPokemon();
}

function renderPokemonImage(pokemonItem) {
    const image = document.createElement('img');

    image.src = pokemonItem.url_image;

    return image;
}

const img1 = renderPokemonImage(pokeOne);
const img2 = renderPokemonImage(pokeTwo);
const img3 = renderPokemonImage(pokeThree);

const div = document.getElementById('pokemon');

div.append(img1, img2, img3);