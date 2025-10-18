import {IUsers} from "@/models/IUsers";
import Link from "next/link";
import {getAllUsers} from "@/services/api.service";


export const UsersComponents = async () => {

    const users: IUsers[] = await getAllUsers()
    return (
        <>
            <h1>Список користувачів</h1>
            <ul>
                {users.map((user: IUsers) => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};