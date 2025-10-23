import Form from "next/form";


export default function Home() {
    return (
        <div>
            {/*<form action='/submit' method='POST'>*/}
            {/*    <input type='text' name={'name'} placeholder={'login'}/>*/}
            {/*    <input type='text' name={'password'} placeholder={'password'}/>*/}
            {/*       <button >Submit</button>*/}
            {/*</form>*/}
            <Form action="/submit">
                <input type='text' name={'name'} placeholder={'login'}/>

                <button>Submit</button>

            </Form>

        </div>
    );
}
