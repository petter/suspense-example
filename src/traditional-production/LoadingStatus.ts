import { useQuery } from "react-query";

export enum LoadingStatus {
    Loading = 'Loading',
    Success = 'Success',
    Failure = 'Failure'
}

export const composeLoadingStatus = (statuses: LoadingStatus[]) => {
    if(statuses.some(status => status === LoadingStatus.Failure)) {
        return LoadingStatus.Failure;
    }

    if(statuses.some(status => status === LoadingStatus.Loading)) {
        return LoadingStatus.Loading;
    }

    return LoadingStatus.Success
}

export const useQueryHelper = <T>(...params: Parameters<typeof useQuery<T>>) => {
    const query = (useQuery<T>).apply(this, params)

    if(query.isError) {
        return {status: LoadingStatus.Failure, error: query.error}
    }

    if(query.isLoading) {
        return {status: LoadingStatus.Loading}
    }

    return {status: LoadingStatus.Success, data: query.data}
}
