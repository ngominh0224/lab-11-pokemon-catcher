import pokemon from './pokemon.js';

export function getRandomPokemon(array) {
    const randomIndex = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomIndex];
}