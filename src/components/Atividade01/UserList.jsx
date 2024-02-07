import { UserProfile } from './UserProfile';

const users = [
    {
        id: 1,
        name: "João Silva",
        email: "joao.silva@example.com",
        idade: 30,
        cidade: "São Paulo",
        profissao: "Engenheiro",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id: 2,
        name: "Maria Santos",
        email: "maria.santos@example.com",
        idade: 25,
        cidade: "Rio de Janeiro",
        profissao: "Advogada",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        id: 3,
        name: "Carlos Oliveira",
        email: "carlos.oliveira@example.com",
        idade: 35,
        cidade: "Belo Horizonte",
        profissao: "Professor",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        id: 4,
        name: "Ana Souza",
        email: "ana.souza@example.com",
        idade: 28,
        cidade: "Porto Alegre",
        profissao: "Médica",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        id: 5,
        name: "Pedro Costa",
        email: "pedro.costa@example.com",
        idade: 40,
        cidade: "Brasília",
        profissao: "Empresário",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        id: 6,
        name: "Mariana Ferreira",
        email: "mariana.ferreira@example.com",
        idade: 22,
        cidade: "Salvador",
        profissao: "Estudante",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
        id: 7,
        name: "Lucas Gonçalves",
        email: "lucas.goncalves@example.com",
        idade: 33,
        cidade: "Curitiba",
        profissao: "Designer",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
        id: 8,
        name: "Juliana Lima",
        email: "juliana.lima@example.com",
        idade: 29,
        cidade: "Fortaleza",
        profissao: "Contadora",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
        id: 9,
        name: "Fernando Martins",
        email: "fernando.martins@example.com",
        idade: 45,
        cidade: "Recife",
        profissao: "Engenheiro Civil",
        avatar: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
        id: 10,
        name: "Amanda Almeida",
        email: "amanda.almeida@example.com",
        idade: 27,
        cidade: "Manaus",
        profissao: "Nutricionista",
        avatar: "https://randomuser.me/api/portraits/women/10.jpg"
    }
];


export function UserList() {
    return (
        <>
        <h1>Lista de usuários:</h1>
        <div className='grid grid-cols-4 gap-4 my-3'>
        {users.map(user => (
            <UserProfile key={user.id} user={user}/>
        ))}
        </div>
        </>
    )
    
}