import Titulo from "../shared/Titulo";
import Numero from "./Numero";

export default function Page () {
    return (
        <div className="flex flex-col gap-10">
            <Titulo 
                texto="Usando um Estado"
                legenda="Componente react com useState"
            />
            <Numero />
        </div>
    )
}