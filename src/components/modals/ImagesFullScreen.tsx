'use client';

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useEffect } from "react";

type Props = {
    urlImg: string;
    setImageOpen: (value: boolean) => void;
    nextImage: () => void;
    prevImage: () => void;
}
export const ImagesFullScreen = ({ urlImg, setImageOpen, nextImage, prevImage }: Props) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="fixed max-h-screen inset-0 flex items-center justify-center bg-black/80 text-white h-full w-full z-50">
            <div className="overflow-auto h-[90%] w-full mx-auto ">
                <button
                    type="button"
                    className="absolute top-1 right-2 text-3xl p-2"
                    onClick={() => setImageOpen(false)}
                >x</button>
                <div className="h-full w-full flex items-center" >
                    <img src={urlImg} alt="Imagem full screen" className="w-[90%] mx-auto p-10 object-cover" />
                </div>
                <div className="absolute top-[50%] w-full flex justify-between items-center pl-1 pr-1 sm:px-6 lg:px-14">
                    <button type="button" onClick={prevImage}><ArrowBigLeft size={40} /></button>
                    <button type="button" onClick={nextImage}><ArrowBigRight size={40} /></button>
                </div>
            </div>
        </div>
    )
}