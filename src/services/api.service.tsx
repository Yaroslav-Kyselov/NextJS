import {IUsers} from "@/models/IUsers";

export const getAllUsers = async ():Promise<IUsers[]> => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json());
    return users;

}