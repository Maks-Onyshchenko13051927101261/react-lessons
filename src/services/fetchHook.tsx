import {useEffect, useState} from "react";
// функція в яку ми передаємо дані для перевірки їх та поверненню масиву даних
export const useFetch = <T, >(request: () => Promise<T[]>) => {
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