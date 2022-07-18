import {PokemonResponse} from "./PokemonResponse";

export const fetchPokemon = async (id: number) : Promise<PokemonResponse> => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return await res.json()
}
