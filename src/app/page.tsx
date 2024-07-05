'use client';

import { Items } from "@/components/items/Items";
import { PageMenu } from "@/components/pageMenu/PageMenu";
import { ItemsPerPage } from "@/components/paginate/ItemsPerPage";
import { Paginate } from "@/components/paginate/Paginate";
import { useLoading } from "@/contexts/LoginContext";
import { convertValue } from "@/helpers/convertValue";
import { getData, searchData, getByStoreID, getDataStoreSearchTerm } from "@/hooks/getData";
import { DataResponseType } from "@/types/DataResponse";
import { ErrorResponse } from "@/types/ErrorResponse";
import { useEffect, useState } from "react";

export default function Home() {
    const { setLoading } = useLoading();
    const [data, setData] = useState<DataResponseType | undefined>(undefined);
    const [isError, setIsError] = useState<ErrorResponse | undefined>(undefined);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [totalPages, setTotalPage] = useState(0);
    const [storeSelected, setStoreSelected] = useState(0);
    const [searchTerm, setSarchTerm] = useState('');

    useEffect(() => {
        const getAllData = async () => {
            try {
                const response = await getData(perPage, page);
                if (response) {
                    setData(response);
                    setIsError(undefined);
                    setTotalPage(Math.round(response.countResult / perPage));
                }
            } catch (error) {
                setData(undefined);
                setIsError({ success: false, error: "Not Found", response: { Error: 'Nenhum registro encontrado' } });
            }
        };
        getAllData();
        setLoading(false);

    }, [perPage, page]);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchTerm.length > 0 && storeSelected === 0) {
            // faz requisição pelo termo de busca
            try {
                const result = await searchData(perPage, page, searchTerm);
                if (result) {
                    setData(result);
                    setIsError(undefined);
                    setTotalPage(Math.round(result.countResult / perPage));
                }
            } catch (error) {
                setData(undefined);
                setIsError({ success: false, error: "Not Found", response: { Error: 'Nenhum registro encontrado' } });
            }
        } else if (searchTerm.length === 0 && storeSelected !== 0) {
            // faz requisição pela loja selecionada
            try {
                const result = await getByStoreID(perPage, page, storeSelected);
                if (result) {
                    setData(result);
                    setIsError(undefined);
                    setTotalPage(Math.round(result.countResult / perPage));
                }
            } catch (error) {
                setData(undefined);
                setIsError({ success: false, error: "Not Found", response: { Error: 'Nenhum registro encontrado' } });
            }
        } else {
            // faz requisição pela loja e pelo termo de busca
            try {
                const result = await getDataStoreSearchTerm(perPage, page, storeSelected, searchTerm);

                if (result) {
                    setData(result);
                    setIsError(undefined);
                    setTotalPage(Math.round(result.countResult / perPage));
                }
            } catch (error) {
                setData(undefined);
                setIsError({ success: false, error: "Not Found", response: { Error: 'Nenhum registro encontrado' } });
            }
        }
    }

    const handleSetPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPerPage(parseInt(e.target.value));
    }

    return (
        <div className="overflow-auto my-20">
            <PageMenu
                handleFormSubmit={handleFormSubmit}
                searchTerm={searchTerm}
                setSarchTerm={setSarchTerm}
                storeSelected={storeSelected}
                setStoreSelected={setStoreSelected}
            />

            {data && data.countResult > 1 && (
                <div className="my-6">
                    <ItemsPerPage totalPages={totalPages} handleSetPerPage={handleSetPerPage} />
               </div>
            )}

            {isError && (
                <div className="flex items-center justify-center w-full h-96">Nenhum registro encontrado!</div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {data && data.response.map((item, index) => (
                    <Items
                        key={index}
                        id={item.id}
                        image={item.images[0].url_img}
                        real_state={item.info[0].real_state}
                        title={item.info[0].title}
                        value={item.info[0].value}
                        offer_status={item.offer_status}
                    />
                ))}
            </div>

            {data && !isError && data.countResult > 10 && (
                <div className="mt-10 mb-6 col-span-2">
                    <Paginate page={page} setPage={setPage} totalPages={totalPages} />
                </div>
            )}
        </div>
    );
}
