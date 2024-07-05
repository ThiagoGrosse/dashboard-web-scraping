'use client';

type Props = {
    totalPages: number;
    handleSetPerPage: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}

export const ItemsPerPage = ({ totalPages, handleSetPerPage }: Props) => {

    return (
        <div className='flex flex-col lg:flex-row lg:justify-around my-4 gap-2'>
            <div className="flex gap-2 items-center">
                <label htmlFor='itemsPerPage' className="text-sm" >Itens por página:</label>
                <select
                    name="itemsPerPage"
                    id="itemsPerPage"
                    className='outline-none'
                    onChange={handleSetPerPage}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            <span className="text-sm">Total de Páginas: <span className="text-base ml-2">{totalPages}</span></span>
        </div>
    )
}