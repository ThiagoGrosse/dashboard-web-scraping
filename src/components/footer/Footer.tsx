
export const Footer = () => {
    const version = process.env.VERSION;

    return (
        <footer className="fixed bottom-0 bg-gray-300 w-full h-14 flex justify-center items-center">
            <div className="text-xs flex flex-col justify-center items-center opacity-80">
                <span>&copy; 2024 Thiago Grosse. Todos os direitos reservados.</span>
                <span>Versão: {version}</span>
            </div>
        </footer>
    )
}
