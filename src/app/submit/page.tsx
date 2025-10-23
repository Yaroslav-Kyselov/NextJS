import {FC} from "react";

type Props = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>;
}

const SubmitPage: FC<Props> = async ({searchParams}) => {
    const aweitedSP = await searchParams;


    return (
        <>
            this is page after submit {aweitedSP.name}
        </>
    )
}
export default SubmitPage
