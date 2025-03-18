import Titulo from "@/app/(interna)/shared/Titulo";

export default function Page(props: any) {
  return (
    <div>
      <Titulo
        texto="Rotas Dinâmicas #02"
        legenda="Exibindo os parâmetros passados na rota"
      />
      <div className="mt-10 flex flex-col gap-5">
        <span className="text-3xl font-black">id: {props.params.id}</span>
        <code>
            <pre className="text-2xl p-5 rounded-lg bg-black">
                {JSON.stringify(props, null, 4)}
            </pre>
        </code>
      </div>
    </div>
  );
}
