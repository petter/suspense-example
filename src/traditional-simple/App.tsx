import {usePokemon} from "./usePokemon";
import {Loading} from "../common/Loading";
import {Pokemon} from "../common/Pokemon";

// export const TraditionalSimpleApp = () => {
//   const ditto = usePokemon(25)
//
//   if(ditto === undefined) {
//     return (
//       <Loading />
//     )
//   }
//
//   return (
//     <div>
//       <h1>Traditional Simple</h1>
//         <Pokemon data={ditto} />
//     </div>
//   );
// };

export const TraditionalSimpleApp = () => {
    const bulbasaur = usePokemon(1)
    const charmander = usePokemon(4)
    const squirtle = usePokemon(7)

    if(bulbasaur === undefined || charmander === undefined || squirtle === undefined) {
     return (
       <Loading />
     )
   }

    return (
        <div>
            <h1>Traditional Simple</h1>
            <h2>Starters</h2>
            <Pokemon data={bulbasaur}/>
            <Pokemon data={charmander}/>
            <Pokemon data={squirtle}/>
        </div>
    );
}


