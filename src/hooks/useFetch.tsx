import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
    data: T | null;
    error: Error | null;
    loading: boolean;
}

export const useFetch = <T,>(url: string): UseFetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    setError({
                        name: 'Terrible error',
                        message: response.statusText,
                    });
                } else {
                    const result: T = (await response.json()) as T;
                    setData(result);
                }
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        void fetchData();
    }, [url]);

    return { data, error, loading };
};
