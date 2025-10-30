import Form from "next/form";
import {createCar} from "@/server-actions/serverActions";

const CreateCarPage = () => {
    return (
        <div>
            <Form action={createCar}>
                <input type="text" name="brend" placeholder={'model'}/>
                <input type="number" name="price" placeholder={'price'}/>
                <input type="number" name="year" placeholder={'year'}/>
                <button type="submit">Create Car</button>
            </Form>
        </div>
    )
}

export default CreateCarPage;