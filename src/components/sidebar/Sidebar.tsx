'use client';
import { useSidebar } from "@/contexts/SidebarContext";
import { ArrowLeftFromLine, ArrowRightFromLine, BadgeDollarSign, Store, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import { SidebarItem } from "./components/SidebarItem";
import { Tooltips } from "../tooltip/Tooltip";
import Link from "next/link";

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
        <div ref={sidebarRef} className={`fixed h-full bg-slate-800 transition-all duration-300 ${sidebarOpen ? 'w-52' : 'w-16'}`}>
            <aside className="grid px-5 py-2 text-white">

                <Link href='/'>
                    <SidebarItem icon={BadgeDollarSign} isOpen={sidebarOpen} text="Lista de Ofertas" />
                </Link>

                <Link href='/lojas'>
                    <SidebarItem icon={Store} isOpen={sidebarOpen} text="Lista de Lojas" />
                </Link>

                <Link href='/usuarios'>
                    <SidebarItem icon={Users} isOpen={sidebarOpen} text="Usuários" />
                </Link>

                <div className="mt-8 flex text-gray-400 hover:text-gray-100">
                    {sidebarOpen && (
                        <Tooltips text="Fechar Menu">
                            <button type="button" className="m-auto" onClick={toggleSidebar}><ArrowLeftFromLine /></button>
                        </Tooltips>
                    )}
                    {!sidebarOpen && (
                        <Tooltips text="Abrir Menu">
                            <button type="button" onClick={toggleSidebar}><ArrowRightFromLine /></button>
                        </Tooltips>
                    )}
                </div>
            </aside>
        </div>
    )
}