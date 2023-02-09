import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { ToastOptions, useToast } from 'react-toastify';

const useApiError = () => {
    const[error, setError] = useState<AxiosError | null>(null);
    const toastOptions: any = {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      };
    const{playToast} = useToast(toastOptions);

    useEffect(() => {
        playToast();
    }, [error]); 

    const handleError = (error: AxiosError) =>{
        setError(error);
    }

    const clearError = () => {
        setError(null);
    }

    return [error, handleError, clearError];
}

export default useApiError;