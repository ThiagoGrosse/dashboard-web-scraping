'use client';
import { ReactNode, createContext, useContext, useState } from "react";

type SidebarType = {
    sidebarOpen: boolean;
    toggleSidebar: () => void;
}

const SidebarOpenContext = createContext<SidebarType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [sidebarOpen, setSiderbarOpen] = useState(false);

    const toggleSidebar = () => {
        setSiderbarOpen(!sidebarOpen);
    }

    return (
        <SidebarOpenContext.Provider value={{ sidebarOpen, toggleSidebar }}>
            {children}
        </SidebarOpenContext.Provider>
    );
}

export const useSidebar = () => {
    const context = useContext(SidebarOpenContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};