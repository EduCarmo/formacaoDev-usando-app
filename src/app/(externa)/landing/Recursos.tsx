import Recurso from "./Recurso";

export default function Recursos() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Recurso
                titulo="300x mais rapído"            
                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum suscipit nulla saepe inventore, rem amet sapiente quae. Fuga, provident!"
                imagem="https://picsum.photos/250/301"
            />
            <Recurso
                titulo="Vanguarda em Tecnologia"            
                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum suscipit nulla saepe inventore, rem amet sapiente quae. Fuga, provident!"
                imagem="https://picsum.photos/250/302"
            />
            <Recurso
                titulo="Suport 20/7"            
                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum suscipit nulla saepe inventore, rem amet sapiente quae. Fuga, provident!"
                imagem="https://picsum.photos/250/303"
            />
            <Recurso
                titulo="Web Design Responsivo"            
                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum suscipit nulla saepe inventore, rem amet sapiente quae. Fuga, provident!"
                imagem="https://picsum.photos/250/299"
            />
            <Recurso
                titulo="SEO Otimizado"            
                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum suscipit nulla saepe inventore, rem amet sapiente quae. Fuga, provident!"
                imagem="https://picsum.photos/250/298"
            />
            <Recurso
                titulo="Backup Diario"            
                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum suscipit nulla saepe inventore, rem amet sapiente quae. Fuga, provident!"
                imagem="https://picsum.photos/250/297"
            />
        </div>
    )
}