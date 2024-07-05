import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [
        function ({ addUtilities }: { addUtilities: Function }) {
            interface NewUtilities {
                [key: string]: {
                    display: string;
                    "-webkit-line-clamp": string;
                    "-webkit-box-orient": string;
                    overflow: string;
                    "text-overflow": string;
                    "white-space": string;
                };
            }

            const newUtilities: NewUtilities = {
                ".truncate-2-lines": {
                    display: "-webkit-box",
                    "-webkit-line-clamp": "2",
                    "-webkit-box-orient": "vertical",
                    overflow: "hidden",
                    "text-overflow": "ellipsis",
                    "white-space": "normal",
                },
            };

            // Adiciona as novas utilidades
            addUtilities(newUtilities, ["responsive", "hover"]);
        },
    ],
} satisfies Config;

export default config;
