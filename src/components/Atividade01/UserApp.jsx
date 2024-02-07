import { UserList } from "./UserList";



export function UserApp() {
    return (
        <div className=" mx-auto grid w-11/12 m-5 bg-slate-900 rounded-lg shadow-md p-7">
            <h1  className=' font-extrabold text-xl antialiased'>Atividade 1 - Gerenciando Profiles</h1>
            <UserList />
        </div>
    )

}

