import { UserCard } from './UserCard';

export function UserProfile({ user }) {
    return (
        <div>
            <UserCard user={user}/>
        </div>
    )
}