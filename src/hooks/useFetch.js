import { useEffect, useState } from "react";


export const useFetch = ( url ) => {

    const [state, setState] = useState({ 
        data: null, 
        isLoading: true, 
        error: null 
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
            error: null,
        });

        try {

            const resp = await fetch( url );

            if ( !resp.ok ) {
                throw new Error('No se ha podido realizar la petición');
            }

            const data = await resp.json();
            setState({
                data,
                isLoading: false,
                error: null,
            })

        } catch ( error ) {

            setState({
                data: null,
                isLoading: false,
                error: error.message
            });
        }
    };


    useEffect(() => {
        getFetch();
    }, [url])

    return {
        data: state.data, 
        isLoading: state.isLoading, 
        error: state.error, 
    };

}