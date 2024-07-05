'use client';

import { convertValue } from "@/helpers/convertValue";
import Link from "next/link";

type Props = {
    title: string;
    value: number;
    image: string;
    id: number;
    real_state: string;
    offer_status: boolean;
};

export const Items = ({ title, value, image, id, real_state, offer_status }: Props) => {

    return (
        <Link
            href={`/${id}`}
            className="relative my-5 mx-2 p-2 flex flex-col gap-2 justify-center items-center px-4 rounded-md shadow-lg shadow-slate-600 h-[340px]"
        >
            <span className={`absolute right-1 top-1 py-1 px-4 border border-gray-300 rounded-md text-white ${offer_status ? 'bg-green-500' : 'bg-gray-600'}`}>{offer_status ? 'Ativo' : 'Inativo'}</span>
            <div>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-52 object-cover mb-2 rounded-md"
                />
            </div>
            <div className="text-xl font-bold truncate-2-lines">
                {title}
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="text-xs flex flex-col">
                    Anunciado por:
                    <span className="font-bold">{real_state}</span>
                </div>
                <div className="font-bold text-lg">{convertValue(value)}</div>
            </div>
        </Link>
    )
}