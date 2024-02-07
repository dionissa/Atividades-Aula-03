import { PoemList } from "./PoemList";

export function PoemApp() {
    return (
        <div className=" mx-auto grid w-11/12 m-5 bg-slate-900 rounded-lg shadow-md p-7">
            <h1  className=' font-extrabold text-xl antialiased'>Atividade 5 - Jardim poético</h1>
            <PoemList/>
        </div>
    )
}
