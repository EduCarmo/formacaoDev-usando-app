import {
  IconApi,
  IconArrowsJoin2,
  IconBug,
  IconChartDots3,
  IconDatabase,
  IconLoader,
  IconRoute,
  IconRoute2,
} from "@tabler/icons-react";
import Titulo from "../shared/Titulo";
import Exercicio from "./Exercicio";

export default function Page() {
  return (
    <div>
      <Titulo
        texto="Área do Aluno"
        legenda="Listas de todos os exercícios implementados"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        <Exercicio url="/loading" titulo="Loading" icone={<IconLoader />} />
        <Exercicio url="/erro" titulo="Erro" icone={<IconBug />} />
        <Exercicio
          url="/dinamica/blog/123"
          titulo="Rota Dinâmica #01"
          icone={<IconRoute />}
        />
        <Exercicio
          url="/dinamica/curso/html-basico?esconderAulasConcluidas=true"
          titulo="Rota Dinâmica #02"
          icone={<IconRoute2 />}
        />
        <Exercicio
          url="/paralelas"
          titulo="Rota Paralelas"
          icone={<IconArrowsJoin2 />}
        />
        <Exercicio
          url="/estado"
          titulo="Usando um Estado"
          icone={<IconDatabase />}
        />
        <Exercicio url="/dados" titulo="Usando API" icone={<IconApi />} />
        <Exercicio url="/contexto/a" titulo="Usando Contexto" icone={<IconChartDots3 />} />
      </div>
    </div>
  );
}
