import {IUsers} from "@/models/IUsers";

export const getAllUsers = async (): Promise<IUsers[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json());

}