import {FC} from "react";
import Link from "next/link";
import {IPosts} from "@/models/IPosts";

type PostsPropsType = {
    post: IPosts
}
export const PostComponent: FC<PostsPropsType> = ({post}) => {


    return (
        <div key={post.id} style={{marginBottom: '15px'}}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`}>Детальніше</Link>
        </div>
    );
};