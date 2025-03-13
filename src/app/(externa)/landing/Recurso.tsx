import Image from "next/image";

export interface RecursoProps {
  titulo: string;
  texto: string;
  imagem: string;
}

export default function Recurso({ titulo, texto, imagem }: RecursoProps) {
  return (
    <div className="
        flex flex-col 
        border border-zinc-700 p-5 rounded-lg
    ">
      <Image 
        src={imagem} 
        width={250} 
        height={300} 
        alt="imagem do recurso" 
        unoptimized 
        className="self-center mb-7"
        />
      <h3 className="text-xl font-semibold mb-1">{titulo}</h3>
      <p className="text-zinc-500 text-sm">{texto}</p>
    </div>
  );
}
