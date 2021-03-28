import {useState, useCallback} from  'react'

// interface UseHttpType {
//     loading: boolean,
//     request: (url: string, method: string, body: any, headers: object) => object
//     error: any,
//     clearError: object
// }

export const useHttp = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const request = useCallback( async (url, method = 'GET', body = null, headers = {}) => {
        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            };

            setLoading(true);
            const response = await fetch(url, {method, body, headers});
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.msg || 'Something went wrong')
            }

            setLoading(false);
            return data;
        } catch (err) {
            setLoading(false);
            setError(err.message);
            throw err;
        }
    }, []);

    const clearError = useCallback(() => setError(null), [])

    return {
        loading,
        request,
        error,
        clearError
    }
};