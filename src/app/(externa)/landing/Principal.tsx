import Botao from "@/app/shared/Botao";

export default function Principal() {
  return (
    <div className="flex flex-col justify-center items-center h-[450px] gap-10 text-center">
      <h1 className="
            font-black text-6xl leading-[90px]
            bg-clip-text text-transparent
            bg-gradient-to-b from-zinc-200 to-zinc-400
        
        ">
            Landing Page com Next.JS
        </h1>
      <h2 className="text-zinc-500 w-3/4 text-4xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum
        suscipit nulla saepe inventore, rem amet sapiente quae. Fuga, provident!
      </h2>
      <div className="flex gap-3">
        <Botao url="/home" destacado maior>Iniciar Aqui</Botao>
        <Botao url="/home" maior>Sobre Nós</Botao>
      </div>
    </div>
  );
}
