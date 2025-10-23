import Form from "next/form";
import {saveMeal} from "@/server-actions/serverActions";

export default function Home() {
    return (
        <div>
           <Form action={saveMeal} >
               <input type={"text"} name={"title"}/>
                <button>send</button>


           </Form>

        </div>
);
}
