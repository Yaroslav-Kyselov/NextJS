'use server';

import sql from 'better-sqlite3';
import {revalidatePath} from "next/cache";

const db = sql('meals.db');

export const saveMeal = async (formData: FormData) => {
    //formData назва довільна, FormData - тип даних (обов'язково)

    //fetch post
    //do come db stuff
    //add data to db
    const titleValue = formData.get('title'); //отримуємо значення з форми по name
    db.prepare('insert into meals (title) values (?)').run(titleValue);
    revalidatePath('/'); //шлях до сторінки, яку потрібно оновити


}
export const getMeals=async ():Promise<{id:number, title:string}[]> =>{

    return db.prepare<{id:number, title:string}[]>('select * from meals').all() as {id:number, title:string}[];
}