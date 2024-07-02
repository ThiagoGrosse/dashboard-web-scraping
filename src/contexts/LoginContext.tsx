'use client';

import { LoadingScreen } from "@/components/loadingScrren/LoadingScreen";
import { ReactNode, createContext, useContext, useState } from "react";

type LoadingContextProps = {
    whileLoading: boolean;
    setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [whileLoading, setIsLoading] = useState(true);

    const setLoading = (loading: boolean) => {
        setIsLoading(loading);
    }

    return (
        <LoadingContext.Provider value={{ whileLoading, setLoading }}>
            {whileLoading && (
                <LoadingScreen />
            )}
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }

    return context;
}