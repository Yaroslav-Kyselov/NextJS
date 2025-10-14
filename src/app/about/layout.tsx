import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "AboutLayout - Create Next App",
};

type Props = { children: React.ReactNode };

const AboutLayout = ({children}: Props) => {

    return (
        <div>
            <hr/>
            About layout
            {children}
            <hr/>
        </div>
    );
}
export default AboutLayout