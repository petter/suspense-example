import {ReactNode, Suspense } from "react";
import {Loading} from "../common/Loading";

interface SuspenseLoaderProps {
    children: ReactNode;
}

export const SuspenseLoader = ({children}: SuspenseLoaderProps) => (
    <Suspense fallback={<Loading />}>
        {children}
    </Suspense>
)