'use client';
import { useSidebar } from "@/contexts/SidebarContext";
import { ArrowLeftFromLine, ArrowRightFromLine, BadgeDollarSign, Cog, Store } from "lucide-react";
import { useEffect, useRef } from "react";
import { SidebarItem } from "./components/SidebarItem";

export const Sidebar = () => {
    const { sidebarOpen, toggleSidebar } = useSidebar();

    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                if (sidebarOpen) {
                    toggleSidebar();
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarOpen, toggleSidebar]);

    return (
        <div ref={sidebarRef} className={`fixed h-full bg-slate-800 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'}`}>
            <aside className="grid px-5 py-2 text-white">

                <SidebarItem icon={BadgeDollarSign} isOpen={sidebarOpen} text="Lista de Ofertas" />
                <SidebarItem icon={Store} isOpen={sidebarOpen} text="Lista de Lojas" />
                <SidebarItem icon={Cog} isOpen={sidebarOpen} text="Configurações" />

                <div className="mt-8 flex text-gray-400 hover:text-gray-100">
                    {sidebarOpen && <button type="button" className="m-auto" onClick={toggleSidebar}><ArrowLeftFromLine /></button>}
                    {!sidebarOpen && <button type="button" onClick={toggleSidebar}><ArrowRightFromLine /></button>}
                </div>
            </aside>
        </div>
    )
}