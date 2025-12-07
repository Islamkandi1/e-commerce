import { RegisterSchemaType } from "@/schema/register";

export async function register(values:RegisterSchemaType){

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });
        const data = await res.json();
            return data


}