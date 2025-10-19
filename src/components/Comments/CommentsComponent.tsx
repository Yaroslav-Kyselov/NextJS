import {getAllComments} from "@/services/api.service";
import {IComments} from "@/models/IComments";
import {CommentComponent} from "@/components/Comments/CommentComponent";

export const CommentsComponent = async () => {

    const comments: IComments[] = await getAllComments()
    return (
        <>
            <h1>Коментарі</h1>
            <ul>
                {comments.map((comment: IComments) => <CommentComponent key={comment.id} comment={comment}/>)}
            </ul>
        </>
    );
};