import {useEffect, useState} from "react";

export const useFetch
    = <T, >(response: () => Promise<T[]>) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [loader, setLoader] = useState<T[]>([]);
    useEffect(() => {
        response().then(res=>setLoader(res))
            .catch(err=>setError(err))
            .finally(() => setIsLoading(false));
    }, [response]);
    return {loader, error, isLoading}
}