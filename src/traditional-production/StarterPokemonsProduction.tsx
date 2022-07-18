import {LoadingWrapper} from "./LoadingWrapper";
import {Pokemon} from "../common/Pokemon";
import {PokemonResponse} from "../common/PokemonResponse";
import {usePokemonProduction} from "./usePokemonProduction";

export const StarterPokemonsProduction = () => {
    const bulbasaur = usePokemonProduction(1)
    const charmander = usePokemonProduction(4)
    const squirtle = usePokemonProduction(7)

    return (
        <div>
            <h2>Starter Pokemons</h2>
            <LoadingWrapper status={[bulbasaur.status, charmander.status, squirtle.status]}>
                <Pokemon data={bulbasaur.data as PokemonResponse}/>
                <Pokemon data={charmander.data as PokemonResponse}/>
                <Pokemon data={squirtle.data as PokemonResponse}/>
            </LoadingWrapper>
        </div>
    )
}