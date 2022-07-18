import {QueryClient, QueryClientProvider } from "react-query";
import {StarterPokemonsProduction} from "./StarterPokemonsProduction";

const queryClient = new QueryClient();

export const TraditionalProductionApp = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <h1>Traditional Production</h1>
            <StarterPokemonsProduction />
        </QueryClientProvider>
  );
};