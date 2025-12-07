"use client"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, LoginSchemaType } from '@/schema/login'
import { signIn } from "next-auth/react"
import toast from "react-hot-toast"
import { useState } from "react"
import { ScaleLoader } from "react-spinners"
const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm<LoginSchemaType>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(loginSchema),
        mode: "onTouched"
    })

    // login=================================================
    async function login(values: LoginSchemaType) {

        setIsLoading(true)
        const user = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false
        })

        if (user?.ok) {
            toast.success("Login successfully")
            setTimeout(() => {
                location.replace("/")
            }, 700);
        } else {
            toast.error(user?.error || "Something went wrong")
        }
        setIsLoading(false)
    }

    return (
        <Form  {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(login)}>
                {/* email */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='capitalize' htmlFor='email'>email</FormLabel>
                            <FormControl>
                                <input
                                    {...field}
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border-2 rounded-xl focus:scale-[1.02] border-black bg-white  transition-all"
                                />
                            </FormControl>
                            <FormMessage className='text-red-700 capitalize text-sm  bg-red-200 px-3 py-2 rounded-lg ' />
                        </FormItem>
                    )}
                />
                {/* password */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className='mb-4'>
                            <FormLabel className='capitalize' htmlFor='password'>password</FormLabel>
                            <FormControl>
                                <input
                                    {...field}
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-2 border-2 rounded-xl focus:scale-[1.02] border-black bg-white  transition-all"
                                />
                            </FormControl>
                            <FormMessage className='text-red-700 capitalize text-sm  bg-red-200 px-3 py-2 rounded-lg ' />
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full mb-4 rounded-2xl py-3 bg-black text-white font-bold capitalize tracking-widest cursor-pointer transition-all duration-300 hover:bg-[#353535] hover:rounded-4xl active:scale-98 mt-2"
                >
                    {isLoading ? <ScaleLoader
                        color="#fff"
                        height={20}
                        width={3}
                    /> : "signIn"}


                </button>
            </form>
        </Form>
    )
}

export default Login
