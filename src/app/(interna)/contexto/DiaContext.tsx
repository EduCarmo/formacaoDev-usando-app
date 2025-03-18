"use client"
import { useState, createContext } from "react";

const dias = ["segunda", "terça", "quarta", "quinta", "sexta", "sabado", "domingo"];

const DiaContext = createContext<DiaContextProps>({} as any);

export interface DiaContextProps {
    dia: string
    proximoDia: () => void
    diaAnterior: () => void
}

export function DiaProvider(props: any) {

    const [indice, setIndice] = useState<number>(0);

    return (
        <DiaContext.Provider value={{
            get dia(){
                const mod = Math.abs(indice) % 7;
                if(mod === 0) return dias[0]
                return indice > 0 ? dias[mod] : dias[7 - mod]
            },
            
            proximoDia: () => setIndice(indice + 1),
            diaAnterior: () => setIndice(indice - 1)
        }}>
            {props.children}
        </DiaContext.Provider>
    )
}

export default DiaContext