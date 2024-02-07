export function UserCard({ user }) {
    return (
        <div className=" bg-gradient-to-b from-slate-600 to-slate-800 rounded-md p-2 flex flex-col">
            <img src={user.avatar} alt={`Imagem do avatar de ${user.name}`} className=" rounded-md h-40 w-40 mx-auto" />
            <h2>Nome: {user.name}</h2>
            <p className=" text-slate-400">Email: {user.email}</p>
            <p className=" text-slate-500">Idade: {user.idade}</p>
            <p className=" text-slate-400">Cidade: {user.cidade}</p>
            <p className=" text-slate-500">Profissão: {user.profissao}</p>
        </div>
    )
}