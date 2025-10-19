import {IComments} from "@/models/IComments";
import {FC} from "react";
import Link from "next/link";

type CommentPropsType = {
    comment: IComments
}

export const CommentComponent: FC<CommentPropsType> = ({comment}) => {


    return (
        <div>
            <li key={comment.id}>
                <Link href={`/comments/${comment.id}`}>{comment.name}</Link>
            </li>
        </div>
    );
};