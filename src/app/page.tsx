'use client';

import { useLoading } from "@/contexts/LoginContext";
import { useEffect } from "react";

export default function Home() {
    const { setLoading } = useLoading();

    useEffect(() => {
        setLoading(false);
    })

    return (
        <div>
            Lista de ofertas
        </div>
    );
}
