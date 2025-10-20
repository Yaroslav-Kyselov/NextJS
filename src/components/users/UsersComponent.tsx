import {getAllUsers} from "@/services/api.service";
import Link from "next/link";

export const UsersComponent = async () => {

    const users = await getAllUsers();
    console.log(users);
    return (
        <div>
            {
                users.map(user => <div key={user.id}>
                    <Link href={{
                        pathname: '/users/' + user.id.toString(),
                        query: {name: user.name}
                    }}>{user.id} {user.name} </Link>
                </div>)
            }
        </div>
    );
};