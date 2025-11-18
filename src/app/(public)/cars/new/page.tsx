'use client';

import {createCar} from "@/server-actions/serverActions";
import {ICar} from "@/models/ICar";
import Joi from "joi";
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import {useTransition} from "react";

// схема валідації через Joi
const schema = Joi.object<ICar>({
    brand:Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .messages({'string.pattern.base':'You brand value did not match pattern'}),
    price:Joi.number().min( 0 ).max(1000000)
        .messages({'number.min':'Price must be greater than or equal to 0',
            'number.max':'Max price 1 000 000'
        }),
    year:Joi.number().min(1990).max(2025).messages({
        'number.min':'Year must be greater than or equal to 1990',
        'number.max':'Year must be less than or equal to 2025'
    }),
});

export default function NewCarPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICar>({ resolver: joiResolver(schema) });

    const [isPending, startTransition] = useTransition();

    const onSubmit = (data: ICar) => {
        startTransition(async () => {
            await createCar(data);
        });
    };

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold mb-4">Додати нову автівку</h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-md space-y-4 bg-gray-50 p-6 rounded-lg shadow"
            >
                {/* Model */}
                <div>
                    <label className="block font-semibold">Brand</label>
                    <input
                        {...register('brand')}
                        className="border p-2 w-full rounded"
                        placeholder="Audi"
                    />
                    {errors.brand && (
                        <p className="text-red-500 text-sm mt-1">{errors.brand.message}</p>
                    )}
                </div>

                {/* Price */}
                <div>
                    <label className="block font-semibold">Price</label>
                    <input
                        type="number"
                        {...register('price')}
                        className="border p-2 w-full rounded"
                        placeholder="50000"
                    />
                    {errors.price && (
                        <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
                    )}
                </div>

                {/* Year */}
                <div>
                    <label className="block font-semibold">Year</label>
                    <input
                        type="number"
                        {...register('year')}
                        className="border p-2 w-full rounded"
                        placeholder="2020"
                    />
                    {errors.year && (
                        <p className="text-red-500 text-sm mt-1">{errors.year.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isPending}
                    className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 disabled:opacity-60"
                >
                    {isPending ? 'Збереження...' : 'Зберегти'}
                </button>
            </form>
        </main>
    );
}