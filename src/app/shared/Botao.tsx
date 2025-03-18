import Link from "next/link";

export interface BotaoProps {
  url?: string;
  onclick?: () => void;
  destacado?: boolean;
  children?: React.ReactNode;
  maior?: boolean;
}

export default function Botao({
  url,
  onclick,
  destacado,
  children,
  maior,
}: BotaoProps) {
  function renderizarBotao() {
    return (
      <button
        className={`
                ${
                  destacado
                    ? "bg-zinc-100 text-black hover:bg-zinc-200"
                    : "bg-black text-zinc-400 hover:border-zinc-400"
                }
                ${maior ? "px-5 py-3" : "px-3 py-1.5 text-sm"}
                border border-zinc-600 rounded-lg text-sm
            `}
        onClick={onclick}
      > 
        {children}
      </button>
    );
  }

  return url ? <Link href={url}>{renderizarBotao()}</Link> : renderizarBotao();
}
