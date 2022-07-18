import {ReactNode} from "react";
import {composeLoadingStatus, LoadingStatus} from "./LoadingStatus";
import {Loading} from "../common/Loading";

interface LoadingWrapperProps {
    status: LoadingStatus[];
    children: ReactNode;
}

export const LoadingWrapper = ({status, children}: LoadingWrapperProps) => {
   const composedStatus = composeLoadingStatus(status)

    if(composedStatus === LoadingStatus.Loading) {
        return (
            <Loading />
        )
    }

    if(composedStatus === LoadingStatus.Failure) {
        return (
            <h2>Something went wrong while trying to fetch the data... 😢</h2>
        )
    }

    return <>{children}</>;
}
