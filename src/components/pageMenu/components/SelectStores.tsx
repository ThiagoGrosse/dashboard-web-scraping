'use client';

import { getStores } from "@/hooks/getData";
import { StoresType } from "@/types/Stores";
import { useEffect, useState } from "react";

type Props = {
    storeSelected: number;
    setStoreSelected: (storeId: number) => void;
}

export const SelectStores = ({ storeSelected, setStoreSelected }: Props) => {
    const [stores, setStores] = useState<StoresType[]>();

    useEffect(() => {
        const getListStore = async () => {
            try {
                const res = await getStores();

                if (res) {
                    setStores(res.response);
                }
            } catch (error) {

            }
        }
        getListStore();
    }, [])

    return (
        <>
            {stores && stores.length > 0 && (
                <div className="flex flex-col gap-2 justify-around">
                    <label htmlFor="select-store" className="text-gray-700 font-medium">Selecione uma loja</label>
                    <select
                        id="select-store"
                        name="select-store"
                        className="outline-none flex-1 p-2 border border-gray-300 rounded-md"
                        onChange={(e) => setStoreSelected(parseInt(e.target.value))}
                    >
                        <option defaultValue="0">Selecione</option>
                        {stores && stores.length > 0 && stores.map(item => (
                            <option key={item.id} value={item.id.toString()}>{item.store_name}</option>
                        ))}
                    </select>
                </div>
            )}
        </>
    )
}