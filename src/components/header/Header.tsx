'use client';

import { Power } from "lucide-react";
import { Tooltips } from "../tooltip/Tooltip";
import Link from "next/link";


export const Header = () => {
    return (
        <header className="fixed top-0 w-full flex justify-between h-16 bg-gray-200 p-4 z-10">
            <div>
                <Link href='/'>
                    <span className="relative flex text-[10px]">WEB
                        <span className="absolute mt-2 ml-4 text-xl font-bold">Scraping</span>
                    </span>
                </Link>
            </div>
            <div className="flex h-full items-center justify-between text-xs gap-2">
                <span>Olá, <span className="font-bold">Nome do usuário</span></span>
                <Tooltips text="Sair">
                    <Power size={20} strokeWidth={3} color="#1e293b" />
                </Tooltips>
            </div>
        </header>
    )
}