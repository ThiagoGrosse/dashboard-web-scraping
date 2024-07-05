'use client';

import { ImagesFullScreen } from "@/components/modals/ImagesFullScreen";
import { PriceHistory } from "@/components/modals/PriceHistory";
import { Tooltips } from "@/components/tooltip/Tooltip";
import { useLoading } from "@/contexts/LoginContext";
import { convertValue } from "@/helpers/convertValue";
import { getDataById, getHistoryById } from "@/hooks/getData";
import { DataItemType } from "@/types/DataItem";
import { ErrorResponse } from "@/types/ErrorResponse";
import { PriceHistoryType } from "@/types/PriceHistory";
import { LinkIcon } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
    params: {
        id: string
    }
}

export default function Page({ params }: Props) {
    const id = params['id'];
    const { setLoading } = useLoading();
    const [data, setData] = useState<DataItemType | undefined>(undefined);
    const [isError, setIsError] = useState<ErrorResponse | undefined>(undefined);
    const [dataHistory, setDataHistory] = useState<PriceHistoryType | null>(null);
    const [errorHistory, setErrorHistory] = useState<ErrorResponse | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [imageOpen, setImageOpen] = useState(false);
    const [indexImg, setIndexImg] = useState(0);

    useEffect(() => {
        const getDataItem = async () => {

            try {
                const result = await getDataById(parseInt(id));

                if (result) {
                    setData(result.response);
                    setIsError(undefined);
                }
            } catch (error) {
                setData(undefined);
                setIsError({ success: false, error: "Not Found", response: { Error: 'Erro ao carregar dados' } });
            }
        }

        const getDataHistory = async () => {

            try {
                const res = await getHistoryById(parseInt(id));

                if (res.success) {
                    setDataHistory(res);
                }
            } catch (error) {
                setErrorHistory({
                    success: false,
                    error: "Not found",
                    response: {
                        Error: "Ocorreu um erro, não foi possível carregar os dados."
                    }
                });
            }
        }

        getDataItem();
        getDataHistory();
        setLoading(false);
    }, [])

    const handleImageOpen = (index: number) => {
        setImageOpen(true);
        setIndexImg(index)
    }

    const nextImage = () => {
        if (data) {
            setIndexImg((indexImg) => (indexImg + 1) % data.images.length);
        }
    }

    const prevImage = () => {
        if (data) {
            setIndexImg((indexImg) => (indexImg + 1) % data.images.length);
        }
    }

    console.log(dataHistory);
    return (
        <div className="overflow-auto my-20">
            <div className="my-4">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold">{data?.info[0].title}</h1>
                    <Tooltips text="Visitar anúncio">
                        <a href={data?.url} target="_blank" rel="noopener noreferrer">
                            <LinkIcon />
                        </a>
                    </Tooltips>
                </div>
                <div className="flex flex-col items-end">
                    <button
                        type="button"
                        className="bg-indigo-600 text-white rounded-md py-2 px-4"
                        onClick={() => setModalOpen(true)}
                    >
                        Histórico de preço
                    </button>
                    <div className="mt-4 font-bold text-end">
                        {data && convertValue(data?.info[0].value)}
                    </div>
                </div>
            </div>

            <hr />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 my-6">
                <div>
                    <div className="flex gap-2 xl:flex-col xl:mt-4 xl:gap-0">
                        Anunciado por:
                        <span className="font-bold">{data?.store.store_name}</span>
                    </div>
                    <div className="flex gap-2 xl:flex-col xl:mt-4 xl:gap-0">
                        Tipo de anúncio:
                        <span className="font-bold">{data?.info[0].type_of_offer}</span>
                    </div>
                    <div className="flex gap-2 xl:flex-col xl:mt-4 xl:gap-0">
                        Status do anúncio:
                        <span className="font-bold">{data?.offer_status ? 'Ativo' : 'Inativo'}</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-sm mb-2">Detalhes:</span>
                    {/* {data && JSON.parse(data.info[0].details)} */}
                    {data && data?.info[0].details.replace('["', '').replace('"]', "").split('","').map((details, index) => (
                        <div key={index}>
                            {details}
                        </div>
                    ))}
                </div>
            </div>

            <hr />

            <div className="flex flex-col">
                <span className="font-bold text-sm my-4">Imagens: </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {data && data.images.map((img, index) => (
                        <div key={index}>
                            <img
                                src={img.url_img}
                                alt={`Imagem ${index}`}
                                className="w-full h-40 object-cover rounded-md cursor-pointer"
                                onClick={() => handleImageOpen(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Modal Histórico de preço */}
            {modalOpen && (
                <PriceHistory dataHistory={dataHistory} title={data?.info[0].title || ""} setModalOpen={setModalOpen} />
            )}

            {/* Modal Imagem Full Screen */}
            {imageOpen && data?.images && (
                <ImagesFullScreen urlImg={data.images[indexImg].url_img} nextImage={nextImage} prevImage={prevImage} setImageOpen={setImageOpen} />
            )}
        </div>
    );
}
