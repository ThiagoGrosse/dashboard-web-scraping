'use client';

import { LucideIcon } from 'lucide-react';
import { Tooltips } from '@/components/tooltip/Tooltip';

type Props = {
    icon: LucideIcon; // Icon for the badge
    isOpen: boolean;  // Whether the sidebar is open or not
    text: string;  // The text to be displayed in the sidebar item
}

export const SidebarItem = ({ icon: Icon, isOpen, text }: Props) => {

    return (
        <div className="flex gap-2 items-center justify-start my-2 text-gray-400 hover:text-gray-100">
            <Tooltips text={text}>
                <Icon size={28} strokeWidth={1} />
            </Tooltips>
            <span className={`text-sm w-40 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>{text}</span>
        </div>
    )
}