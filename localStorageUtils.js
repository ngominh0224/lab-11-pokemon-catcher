import pokemon from './pokemon.js';
import { findUnderlineId } from './utils.js';

const POKESTATS = 'POKESTATS';

export function getPokeData() {
    let stats = JSON.parse(localStorage.getItem(POKESTATS));

    if (!stats) {
        stats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(stats));
    }
    return stats;
}


export function encounter(pokemonId) {
    const stats = getPokeData();
    const pokeId = findUnderlineId(pokemonId, stats);

    if (!pokeId) {
        const pokemonStats = findUnderlineId(pokemonId, pokemon);
        const addPoke = {
            name: pokemonStats.pokebase,
            _id: pokemonId,
            encounter: 1,
            caught: 0,
        };
        stats.push(addPoke);
    } else {
        pokeId.encounter++;
    }
    setPokemonStats(stats);
}

export function setPokemonStats(stats) {
    localStorage.setItem(POKESTATS, JSON.stringify(stats));
}

export function caught(pokemonId) {
    const stats = getPokeData();
    const pokeId = findUnderlineId(pokemonId, stats);

    pokeId.caught++;
    setPokemonStats(stats);
}