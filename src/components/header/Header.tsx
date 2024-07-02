'use client';

import { useSidebar } from "@/contexts/SidebarContext";

export const Header = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <header className="flex justify-between h-16 bg-blue-500 items-center p-5">
            <h1>WEB | Scraping</h1>
            <h1>Header</h1>
        </header>
    )
}