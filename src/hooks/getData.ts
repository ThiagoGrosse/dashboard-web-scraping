import { api } from "@/libs/apiConfig";
import { StoresType } from "@/types/Stores";

/**
 * Consulta todos os registros
 * @param perPage
 * @param page
 * @returns
 */
export const getData = async (perPage: number, page: number) => {
    return (await api.get(`/site/infos?page=${page}&limit=${perPage}`)).data;
};

/**
 * Consulta dados com base no ID do item
 * @param id
 * @returns
 */
export const getDataById = async (id: number) => {
    return (await api.get(`/site/infos/${id}`)).data;
};

/**
 * Consulta dados com base em um termo buscado
 */
export const searchData = async (
    perpage: number,
    page: number,
    searchTerm: string
) => {
    return (
        await api.get(
            `/site/search?page=${page}&perpage=${perpage}&search=${encodeURIComponent(
                searchTerm
            )}`
        )
    ).data;
};

/**
 * Busca histórico de preço do item
 * @param id
 * @returns
 */
export const getHistoryById = async (id: number) => {
    return (await api.get(`site/history/${id}`)).data;
};

/**
 * Busca todas as lojas
 * @returns
 */
export const getStores = async () => {
    return (await api.get(`/site/stores`)).data;
};

/**
 * Busca dados pelo id da loja
 * @param perPage
 * @param page
 * @param idStore
 * @returns
 */
export const getByStoreID = async (
    perPage: number,
    page: number,
    idStore: number
) => {
    return (
        await api.get(
            `/site/store-by-id/${idStore}?page=${page}&limit=${perPage}`
        )
    ).data;
};

/**
 * Busca dados com base no termo e na loja selecionada
 * @param perPage 
 * @param page 
 * @param idStore 
 * @param searchTerm 
 * @returns 
 */
export const getDataStoreSearchTerm = async (
    perPage: number,
    page: number,
    idStore: number,
    searchTerm: string
) => {
    return (
        await api.get(
            `/site/store-search/${idStore}?page=${page}&limit=${perPage}&search=${encodeURIComponent(
                searchTerm
            )}`
        )
    ).data;
};
