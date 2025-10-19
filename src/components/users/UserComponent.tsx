import {IUsers} from "@/models/IUsers";
import {FC} from "react";
import Link from "next/link";

type UsersPropsType = {
    user: IUsers
}
export const UserComponent: FC<UsersPropsType> = ({user}) => {


    return (
        <div>
            <li key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
        </div>
    );
};