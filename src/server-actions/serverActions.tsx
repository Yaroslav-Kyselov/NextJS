'use server';

import sql from 'better-sqlite3';
import {revalidatePath} from "next/cache";

const db=sql('meals.db');

export const saveMeal = async (formData: FormData) => {
    // console.log(formData);
    // console.log("saveAction");
const titleValue = formData.get('title');
db.prepare('insert into meals (title) values (?)').run(titleValue);



}