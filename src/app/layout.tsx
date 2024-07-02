import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { LoadingProvider } from "@/contexts/LoginContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Web Scraping",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <LoadingProvider>
                    <SidebarProvider>
                        <Header />
                        <Sidebar />
                        <main className="ml-20 mt-4">
                            {children}
                        </main>
                        <Footer />
                    </SidebarProvider>
                </LoadingProvider>
            </body>
        </html>
    );
}
