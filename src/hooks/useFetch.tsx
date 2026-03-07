import {useEffect, useState} from "react";

export const useFetch = <T, >(request: () => Promise<T[]>) => {
    const [item, setItem] = useState<T[]>([])
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        request().then((data) => setItem(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [request])
    return {item, error, loading};
}