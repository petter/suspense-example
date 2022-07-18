import {QueryClient, QueryClientProvider } from "react-query";
import { StarterPokemons } from "./StarterPokemons";
import {SuspenseLoader} from "./SuspenseLoader";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true
        }
    }
});

export const SuspenseApp = () => {
    return (
        <div>
            <h1>Suspense</h1>
            <QueryClientProvider client={queryClient}>
                <SuspenseLoader>
                    <StarterPokemons/>
                </SuspenseLoader>
            </QueryClientProvider>
        </div>
    );
};