import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";

type Props={
    params:Promise<{id:string}>;
    searchParams:Promise<SearchParams>;
}

export const generateMetadata=async({params}:Props):Promise<Metadata> => {
const {id} = await params;
    return {
        title: "User Page title"+ id,
    }

}
const UserPage:FC<Props> = async ({params,searchParams}) => {
    const {id} = await params;
    const sp = await searchParams;
    console.log(sp)


    return (
        <div>
            User Page content {id}
        </div>
    )
}

export default UserPage;