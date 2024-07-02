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
            Usuários
        </div>
    )
}