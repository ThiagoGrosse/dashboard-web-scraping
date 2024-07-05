'use client';

import { useLoading } from "@/contexts/LoginContext";
import { getStores } from "@/hooks/getData";
import { StoresType } from "@/types/Stores";
import { useEffect, useState } from "react";

export default function Page() {
    const { setLoading } = useLoading();
    const [storeList, setStoreList] = useState<StoresType[] | undefined>(undefined);

    useEffect(() => {
        const getListStores = async () => {
            try {
                const result = await getStores();

                if (result) {
                    setStoreList(result.response);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getListStores();
        setLoading(false);
    }, []);

    return (
        <div className="overflow-auto my-20">
            <h1 className="ml-2 font-bold text-2xl my-4">Lista de lojas</h1>
            <table className="table w-full text-center my-6">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Domínio</th>
                        <th>Status</th>
                        <th>Implementado em:</th>
                    </tr>
                </thead>
                <tbody>
                    {storeList && storeList.map((storeListItem, index) => (
                        <tr key={index} className="odd:bg-gray-200">
                            <td className="py-2">{storeListItem.id}</td>
                            <td>{storeListItem.store_name}</td>
                            <td>{storeListItem.domain}</td>
                            <td>
                                <span className={`py-1 px-4 text-white rounded-md ${storeListItem.status_store ? 'bg-green-500' : 'bg-red-500'}`}>
                                    {storeListItem.status_store ? 'Ativo' : 'Inativo'}
                                </span>
                            </td>
                            <td>{
                                new Intl.DateTimeFormat('pt-BR', {
                                    timeZone: 'America/Sao_Paulo',
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit'
                                }).format(new Date(storeListItem.created_at))
                            }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}