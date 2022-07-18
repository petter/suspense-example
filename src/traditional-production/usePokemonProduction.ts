import {useQueryHelper} from "./LoadingStatus";
import {fetchPokemon} from "../common/fetchPokemon";
import {PokemonResponse} from "../common/PokemonResponse";

export const usePokemonProduction = (id: number) => {
    return useQueryHelper<PokemonResponse>(['pokemon', id], () => fetchPokemon(id));
}