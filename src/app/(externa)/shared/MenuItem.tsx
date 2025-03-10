import Link from "next/link";

export interface MenuItemProps {
    texto: string;
    url: string;
}

export default function MenuItem ({texto, url}: MenuItemProps) {
    return (
        <Link href={url}>
            <span className="text-zinc-500 hover:text-zinc-300 transition duration-300">{texto}</span>
        </Link>
    )
}