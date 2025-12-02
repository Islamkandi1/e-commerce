"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useForm } from 'react-hook-form'
import { registerSchema, RegisterSchemaType } from '@/schema/register'
import { zodResolver } from '@hookform/resolvers/zod'
import { register } from '@/apis/register'
import toast from 'react-hot-toast'
import { ScaleLoader } from 'react-spinners'
const Regiter = () => {
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm<RegisterSchemaType>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        resolver: zodResolver(registerSchema),
        mode: "onTouched"
    })
    // register============================================
    async function signup(values: RegisterSchemaType) {
        setIsLoading(true)
        try {
            const data = await register(values)
            if (!data.user.ok) {
                toast.error("email already exist")
                return;
            }
            toast.success("register successfully")
            form.reset()
        } catch {
            toast.error("some thing went wrong")
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <>
            {/* Form */}
            <Form  {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(signup)}>
                    <section className="sm:flex items-center gap-x-4 mb-4">
                        {/* first name */}
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className='sm:w-1/2 mb-4 sm:mb-0'>
                                    <FormLabel className='capitalize' htmlFor='firstName'>first name</FormLabel>
                                    <FormControl>
                                        <input
                                            {...field}
                                            type="text"
                                            id="firstName"
                                            className="w-full  px-4 py-2 border-2 rounded-xl focus:scale-[1.02] border-black bg-white  transition-all"
                                        />
                                    </FormControl>
                                    <FormMessage className='text-red-700 capitalize text-sm  bg-red-200 px-3 py-2 rounded-lg ' />
                                </FormItem>
                            )}
                        />
                        {/* last name */}
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className='sm:w-1/2'>
                                    <FormLabel className='capitalize' htmlFor='lastName'>last name</FormLabel>
                                    <FormControl>
                                        <input
                                            {...field}
                                            type="text"
                                            id="lastName"
                                            className="w-full px-4 py-2 border-2 rounded-xl focus:scale-[1.02] border-black bg-white  transition-all"
                                        />
                                    </FormControl>
                                    <FormMessage className='text-red-700 capitalize text-sm  bg-red-200 px-3 py-2 rounded-lg ' />
                                </FormItem>
                            )}
                        />
                    </section>
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
                            <FormItem>
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
                    {/* confirm password */}
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='capitalize' htmlFor='confirmPassword'>confirm Password</FormLabel>
                                <FormControl>
                                    <input
                                        {...field}
                                        type="password"
                                        id="confirmPassword"
                                        className="w-full px-4 py-2 border-2 rounded-xl focus:scale-[1.02] border-black bg-white  transition-all"
                                    />
                                </FormControl>
                                <FormMessage className='text-red-700 capitalize text-sm  bg-red-200 px-3 py-2 rounded-lg ' />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <button
                        className="w-full rounded-2xl py-3 bg-black text-white font-bold capitalize tracking-widest cursor-pointer transition-all duration-300 hover:bg-[#353535] hover:rounded-4xl active:scale-98 mt-4"
                    >
                        {isLoading ? <ScaleLoader
                            color="#fff"
                            height={20}
                            width={3}
                        /> : "Register"}

                    </button>
                    {/* Login Link */}
                    <p className="text-center text-sm text-gray-600 flex items-center gap-2 justify-center">
                        Already have an account?
                        <Link href="/login" className="text-black font-semibold underline hover:no-underline">
                            Sign In
                        </Link>
                    </p>
                </form>
            </Form>
        </>
    )
}

export default Regiter
