import { DiaProvider } from "./DiaContext";

export default function Template(prop: any) {
    return (
        <DiaProvider>
        <div className="border-2 border-green-500 p-5">
            {prop.children}
        </div>
        </DiaProvider>
    )
}