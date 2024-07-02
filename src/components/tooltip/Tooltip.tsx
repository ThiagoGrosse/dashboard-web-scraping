import { Tooltip } from "@nextui-org/tooltip"
import { ReactNode } from "react"

type Props = {
    text: string;
    children: ReactNode;
}

export const Tooltips = ({ children, text }: Props) => {
    return (
        <Tooltip content={<div className="py-2 px-4 bg-black text-white rounded-md text-sm">
            <div>{text}</div>
        </div>}>
            {children}
        </Tooltip>
    )
}