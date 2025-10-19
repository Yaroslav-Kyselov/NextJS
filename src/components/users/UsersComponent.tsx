import {IUsers} from "@/models/IUsers";
import {getAllUsers} from "@/services/api.service";
import {UserComponent} from "@/components/users/UserComponent";


export const UsersComponent = async () => {

    const users: IUsers[] = await getAllUsers()
    return (
        <>
            <h1>Список користувачів</h1>
            <ul>
                {users.map((user: IUsers) => <UserComponent key={user.id} user={user}/>)}
            </ul>
        </>
    );
};