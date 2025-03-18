"use client";
import { IconMenu2 } from "@tabler/icons-react";
import MenuUsuario from "./MenuUsuario";

export default function Cabecalho() {

    const aparecerAlert = () => {
        alert("Cliquei no menu");
    }

  return (
    <header
      className="
            flex items-center justify-between
            px-7 h-20 bg-zinc-950
        "
    >
      <button onClick={aparecerAlert}>
        <IconMenu2 className="text-zinc-400 hover:text-zinc-200 cursor-pointer" />
      </button>
      <MenuUsuario
        nome="Usuário Mock"
        email="usuario@zmail.com"
        imagem="https://i.pravatar.cc/150/150"
      />
    </header>
  );
}
