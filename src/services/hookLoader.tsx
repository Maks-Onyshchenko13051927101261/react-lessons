import {useEffect, useState} from "react";

export const useLoader = <T, >(request: () => Promise<T[]>) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<T[]>([]);
    useEffect(() => {
        request().then(data => setData(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, [request]);
    return {loading, error, data};
}