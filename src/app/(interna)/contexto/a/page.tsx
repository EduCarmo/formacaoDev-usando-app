"use client";
import { useContext } from "react";
import DiaContext from "../DiaContext";
import Botao from "@/app/shared/Botao";
import Link from "next/link";
import Titulo from "../../shared/Titulo";

export default function Page() {
  const { dia, proximoDia, diaAnterior } = useContext(DiaContext);

  return (
    <>
      <Titulo
        texto="Usando um Contexto Página A"
        legenda="Componente react com useContext"
      />
      <div className="flex flex-col gap-10">
        <span className="text-7xl font-black">{dia}</span>
        <div className="flex gap-5">
          <Botao onclick={diaAnterior}>Anterior</Botao>
          <Botao onclick={proximoDia} destacado>
            Próximo
          </Botao>
        </div>
        <Link href="/contexto/b">Ir para pagina B</Link>
      </div>
    </>
  );
}
