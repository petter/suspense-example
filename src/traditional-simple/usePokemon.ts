import {useEffect, useState } from "react"
import {PokemonResponse} from "../common/PokemonResponse";
import {fetchPokemon} from "../common/fetchPokemon";

export const usePokemon = (id: number) => {
  const [pokemon, setPokemon] = useState<PokemonResponse | undefined>();

  useEffect(() => {
    fetchPokemon(id).then(setPokemon);
  }, [id]);

  return pokemon;
}