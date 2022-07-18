import {usePokemonSuspenseful} from "./usePokemonSuspenseful";
import {Pokemon} from "../common/Pokemon";

/** Fetch-on-render
/* Should optimally use render-as-you-fetch
/* https://react-query-beta.tanstack.com/guides/suspense#fetch-on-render-vs-render-as-you-fetch
*/
export const StarterPokemons = () => {
   const bulbasaur = usePokemonSuspenseful(1)
   const charmander = usePokemonSuspenseful(4)
   const squirtle = usePokemonSuspenseful(7)

   return (
       <div>
          <h2>Starters</h2>
          <Pokemon data={bulbasaur}/>
          <Pokemon data={charmander}/>
          <Pokemon data={squirtle}/>
       </div>

   )
}
