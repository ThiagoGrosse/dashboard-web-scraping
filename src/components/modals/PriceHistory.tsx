import { convertValue } from "@/helpers/convertValue";
import { PriceHistoryType } from "@/types/PriceHistory"

type Props = {
    dataHistory: PriceHistoryType | null;
    title: string;
    setModalOpen: (open: boolean) => void;
}

export const PriceHistory = ({ dataHistory, title, setModalOpen }: Props) => {

    return (
        <div className="fixed top-0 left-0 h-full w-full z-50 bg-black/80">
            <div className="p-5 bg-white max-w-xs sm:max-w-md lg:max-w-3xl xl:max-w-4xl mx-auto my-5">
                <button
                    type="button"
                    className="absolute top-2 right-2 text-2xl p-5 text-white"
                    onClick={() => setModalOpen(false)}
                >x</button>
                <div className="mb-4">
                    <span className="text-sm">Histórico de preço</span>
                    <h1 className="text-2xl">{title}</h1>
                </div>
                <div className="mt-8">
                    <table className="w-full">
                        <thead>
                            <tr className="uppercase border-b border-black dark:border-white">
                                <th className="pb-3">Data</th>
                                <th className="pb-3">Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataHistory && dataHistory.response.map((price, index) => (
                                <tr key={index} className="text-center border-b border-gray-600 odd:bg-slate-600 odd:text-white">
                                    <td className="py-2">{new Intl.DateTimeFormat('pt-BR', {
                                        timeZone: 'America/Sao_Paulo',
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit'
                                    }).format(new Date(price.created_at))}</td>
                                    <td className="py-2">{convertValue(price.price)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}