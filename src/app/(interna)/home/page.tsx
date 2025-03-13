import { IconBug, IconLoader } from "@tabler/icons-react";
import Titulo from "../shared/Titulo";
import Exercicio from "./Exercicio";

export default function Page() {
    return (
        <div>
            <Titulo 
                texto="Área do Aluno"
                legenda="Listas de todos os exercícios implementados"
            />
            <div className="grid grid-cols-4 gap-5 mt-10">
                <Exercicio url="/loading" titulo="Loading" icone={<IconLoader />}/>
                <Exercicio url="/erro" titulo="Erro" icone={<IconBug />}/>
            </div>
        </div>
    )
}