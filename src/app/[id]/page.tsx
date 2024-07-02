'use client';

import { useLoading } from "@/contexts/LoginContext";
import { useEffect } from "react";

export default function Page() {
    const { setLoading } = useLoading();

    useEffect(() => {
        setLoading(false);
    })

    return (
        <div>
            Pagina de item por ID
        </div>
    );
}
