import { DrinkList } from "./Drink";

export function DrinkApp() {
    return (
        <div className=" mx-auto grid w-11/12 m-5 bg-slate-900 rounded-lg shadow-md p-7">
            <h1  className=' font-extrabold text-xl antialiased'>Atividade 4 - Refugio dos sabores</h1>
            <DrinkList/>
        </div>
    )

}