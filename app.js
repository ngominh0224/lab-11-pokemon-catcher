// import functions and grab DOM elements
import { getRandomPokemon } from './utils.js';

let pokeOne = getRandomPokemon();
let pokeTwo = getRandomPokemon();
let pokeThree = getRandomPokemon();

console.log(pokeOne._id, pokeTwo._id, pokeThree._id);
console.log(pokeOne.url_image, pokeTwo.url_image, pokeThree.url_image);

const anyOfThePokemonMatch = pokeOne._id === pokeTwo._id || pokeOne._id === pokeThree._id || pokeTwo.id === pokeThree._id;

while (anyOfThePokemonMatch) {
    pokeOne = getRandomPokemon();
    pokeTwo = getRandomPokemon();
    pokeThree = getRandomPokemon();
}