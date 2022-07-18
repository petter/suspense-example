import { useQuery } from "react-query"
import {fetchPokemon} from "../common/fetchPokemon";

export const usePokemonSuspenseful = (id: number) => {
    const response = useQuery(['pokemon', id], () => fetchPokemon(id))

    if(response.data === undefined) {
        throw new Error('Missing suspense wrapper')
    }

    return response.data;
}