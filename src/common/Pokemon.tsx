import type { PokemonResponse } from "./PokemonResponse";

interface PokemonProps {
  data: PokemonResponse;
}

export const Pokemon = ({data}: PokemonProps) => {
  return (
    <div>
      <img src={data.sprites.front_default} alt="" />
      <p>{data.name}</p>
    </div>
  )
}