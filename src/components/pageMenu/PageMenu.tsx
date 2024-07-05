'use client';

import { SearchTerm } from "./components/SearchTerm";
import { SelectStores } from "./components/SelectStores"

type Props = {
    searchTerm: string;
    setSarchTerm: (searchTerm: string) => void;
    storeSelected: number;
    setStoreSelected: (storeSelected: number) => void;
    handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const PageMenu = ({
    handleFormSubmit,
    searchTerm,
    setSarchTerm,
    storeSelected,
    setStoreSelected
}: Props) => {

    return (
        <form className="flex flex-col lg:flex-row gap-4 lg:items-end" onSubmit={handleFormSubmit}>
            <div className="flex-1">
                <SearchTerm searchTerm={searchTerm} setSearchTerm={setSarchTerm} />
            </div>
            <div className="flex-1">
                <SelectStores storeSelected={storeSelected} setStoreSelected={setStoreSelected} />
            </div>
            <button
                type="submit"
                className="flex-1 mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none"
            >
                Filtrar
            </button>
        </form>
    )
}