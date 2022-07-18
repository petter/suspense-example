import type { PokemonResponse } from "./PokemonResponse";
import styles from './Pokemon.module.css';

interface PokemonProps {
  data: PokemonResponse;
}

export const Pokemon = ({data}: PokemonProps) => {
    return (
        <div className={styles.Pokemon}>
            <h4 className={styles.PokemonName}>{data.name}</h4>
            <img className={styles.PokemonImage} src={data.sprites.front_default} alt=""/>
        </div>
    )
}