import pokemon from './pokemon.js';

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomIndex];
}

export function findByUnderscoreId(array, id) {
    for (item of array) {
        if (item._id === id) return item;
    }
}