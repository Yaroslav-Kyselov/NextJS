import {getAllPosts} from "@/services/api.service";
import {IPosts} from "@/models/IPosts";
import {PostComponent} from "@/components/posts/PostComponent";


export const PostsComponent = async () => {

    const posts: IPosts[] = await getAllPosts()
    return (
        <>
            <h1>Пости</h1>
            <ul>
                {posts.map((post: IPosts) => <PostComponent key={post.id} post={post}/>)}
            </ul>
        </>
    );
};