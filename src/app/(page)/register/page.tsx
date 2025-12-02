import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <main className="pt-12">
                <section className="min-h-screen mx-2 md:mx-15 bg-white flex items-center justify-center">
                    <section className="w-full md:w-[80%] lg:w-[70%] py-12">
                        {/* Header */}
                        <section className="text-center mb-8">
                            <h2 className="text-4xl font-bold tracking-tight mb-2 capitalize">CREATE ACCOUNT</h2>
                            <p className="text-gray-500 text-sm tracking-wide">Join our exclusive fashion community</p>
                        </section>

                        {/* Form */}
                        <form className="space-y-5">
                            {/* Name Fields */}
                            <section className="grid sm:grid-cols-2 gap-x-2 mb-0">
                                <section className='mb-4'>
                                    <label htmlFor="firstName" className="block capitalize text-xs font-semibold tracking-wider mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="w-full px-4 py-2 border-2 rounded-xl focus:scale-[1.02] border-black bg-white  transition-all"
                                    />
                                </section>
                                {/* second name */}
                                <section className='mb-4'>
                                    <label htmlFor="lastName" className="block capitalize text-xs font-semibold tracking-wider mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="w-full px-4 py-2 border-2 rounded-xl focus:scale-[1.02] border-black bg-white  transition-all"
                                        required
                                    />
                                </section>
                            </section>

                            {/* Email */}
                            <section className='mb-4'>
                                <label htmlFor="email" className="block capitalize text-xs font-semibold tracking-wider mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border-2 rounded-xl focus:scale-[1.02] border-black bg-white  transition-all"
                                    required
                                />
                            </section>

                            {/* Password */}
                            <section className='mb-4'>
                                <label htmlFor="password" className="block capitalize text-xs font-semibold tracking-wider mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full px-4 py-2 border-2 rounded-xl focus:scale-[1.02] border-black bg-white  transition-all"
                                />
                            </section>

                            {/* Confirm Password */}
                            <section className='mb-2'>
                                <label htmlFor="confirmPassword" className="block capitalize text-xs font-semibold tracking-wider mb-2">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="w-full px-4 py-2 border-2 rounded-xl focus:scale-[1.02] border-black bg-white  transition-all"
                                />
                            </section>

                            {/* Submit Button */}
                            <button
                                className="w-full rounded-2xl py-3 bg-black text-white font-bold capitalize tracking-widest cursor-pointer transition-all duration-300 hover:bg-[#353535] hover:rounded-4xl active:scale-98 mt-4"
                            >
                                Register
                            </button>

                            {/* Login Link */}
                            <p className="text-center text-sm text-gray-600 flex items-center gap-2 justify-center">
                                Already have an account?
                                <Link href="/login" className="text-black font-semibold underline hover:no-underline">
                                    Sign In
                                </Link>
                            </p>
                        </form>

                        {/* sectionider
                        <section className="flex items-center gap-4 my-8">
                            <section className="flex-1 h-px bg-gray-300"></section>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Or continue with</span>
                            <section className="flex-1 h-px bg-gray-300"></section>
                        </section>

                        Social Buttons
                        <section className="grid grid-cols-2 gap-4">
                            <button className="py-3 border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-300 font-semibold uppercase text-sm tracking-wide">
                                Google
                            </button>
                            <button className="py-3 border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-300 font-semibold uppercase text-sm tracking-wide">
                                Facebook
                            </button>
                        </section> */}
                    </section>
                </section>
            </main>
        </>
    )
}

export default page
