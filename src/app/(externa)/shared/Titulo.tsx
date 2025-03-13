export interface TituloProps {
  texto: string;
  legenda?: string;
  className?: string;
}

export default function Titulo({ texto, legenda, className }: TituloProps) {
  return (
    <div
      className={`
            flex justify-center items-baseline gap-4
            ${className ?? ""}
        `}

    >
      <h3
        className="
                text-3xl font-black
                bg-clip-text text-transparent
                bg-gradient-to-b from-zinc-200 to-zinc-400
                mt-8
            "
      >
        {texto}
      </h3>
      {legenda && <h4 className="text-lg text-zinc-500">{legenda}</h4>}
    </div>
  );
}
