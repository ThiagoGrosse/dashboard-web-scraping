'use client';

type Props = {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
}

export const SearchTerm = ({ searchTerm, setSearchTerm }: Props) => {

    return (
        <input
            type="search"
            name="searchTerm"
            id="searchTerm"
            placeholder="Buscar..."
            autoComplete="off"
            className="w-full py-2 outline-none border-b border-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    )
}