import {IUsers} from "@/models/IUsers";
import {IPosts, } from "@/models/IPosts";
import {IComments} from "@/models/IComments";

export const getAllUsers = async (): Promise<IUsers[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json());
}

export const getAllPosts = async (): Promise<IPosts[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json());
}

export const getAllComments = async (): Promise<IComments[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json());
}