
import Login from '@/app/_components/authForm/login/Login'
import Oouth from '@/app/_components/Oouth/Oouth'
import { getMyToken } from '@/utilities/geyMyToken'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};
const page = async () => {
  const token = await getMyToken()
  if (token) {
    redirect("/")
  }
  return (
    <main className="pt-12">
      <section className="mx-2 md:mx-15 bg-white flex items-center justify-center">
        <section className="w-full md:w-[80%] lg:w-[70%] py-12">
          {/* Header */}
          <section className="text-center mb-8">
            <h2 className="text-4xl font-bold tracking-tight mb-2 capitalize">Welcome Back</h2>
            <p className="text-gray-500 text-sm tracking-wide">Sign in to continue</p>
          </section>

          {/* Form */}
          <Login />





          {/* Login Link */}
          <p className="text-center capitalize text-sm text-gray-600 flex items-center gap-2 justify-center">
            don&apos;t have an account
            <Link href="/register" className="text-black font-semibold underline hover:no-underline">
              register
            </Link>
          </p>


          {/* sectionider */}
          <section className="flex items-center gap-4 my-8">
            <section className="flex-1 h-px bg-gray-300"></section>
            <span className="text-xs text-gray-500 uppercase tracking-wider">Or continue with</span>
            <section className="flex-1 h-px bg-gray-300"></section>
          </section>

          <Oouth />
        </section>
      </section>
    </main>
  )
}

export default page
