import Link from "next/link";

export default function Links() {
  function renderizarLink(texto: string, url: string) {
    return (
      <Link
        href={url}
        className="
        text-zinc-500 text-sm hover:text-zinc-300
        transition duration-300
      "
      >
        {texto}
      </Link>
    );
  }

  return (
    <div className="flex gap-16">
      <div className="flex flex-col gap-5">
        <h3>Recursos</h3>
        <div className="flex flex-col gap-2">
            {renderizarLink("Docs", "/")}
            {renderizarLink("Aprenda", "/")}
            {renderizarLink("Blog", "/")}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3>Mais</h3>
        <div className="flex flex-col gap-2">
            {renderizarLink("Sobre", "/")}
            {renderizarLink("Historia", "/")}
            {renderizarLink("Github", "/")}
            {renderizarLink("Contato", "/")}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3>Legal</h3>
        <div className="flex flex-col gap-2">
            {renderizarLink("Ação Social", "/")}
            {renderizarLink("Projetos", "/")}
            {renderizarLink("Esporte", "/")}
            {renderizarLink("Livros", "/")}
            {renderizarLink("Saude", "/")}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3>Contato</h3>
        <div className="flex flex-col gap-2">
            {renderizarLink("Instagran", "/")}
            {renderizarLink("facebook", "/")}
            {renderizarLink("whatsapp", "/")}
        </div>
      </div>
    </div>
  );
}
