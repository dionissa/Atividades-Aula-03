import { Profile } from "../Atividade02/Profile"

export function AvatarApp() {
    return (
        <div className=" mx-auto grid w-11/12 m-5 bg-slate-900 rounded-lg shadow-md p-7">
            <h1  className=' font-extrabold text-xl antialiased'>Atividade 2 - Ajustes via prop</h1>
            <Profile />
        </div>
    )

}
