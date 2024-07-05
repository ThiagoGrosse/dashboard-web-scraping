/**
 * Converte valores para o modelo nacional (R$)
 * @param value
 * @returns
 */
export const convertValue = (value: number) => {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
};
