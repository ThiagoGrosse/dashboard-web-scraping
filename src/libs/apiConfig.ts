import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const defaulHeaders = {
    "Content-type": "application/json",
    Accept: "application/json",
};

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: defaulHeaders,
});
