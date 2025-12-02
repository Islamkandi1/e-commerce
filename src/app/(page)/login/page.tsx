import Login from '@/app/_components/authForm/login/Login'
import Link from 'next/link'
import React from 'react'

const page = () => {
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
          <Login/>





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

          {/* Social Buttons */}
          <section className="grid grid-cols-2 gap-4">
            <button className="py-3 border-2 rounded-2xl  border-black bg-white hover:bg-black hover:text-white transition-all duration-300 font-semibold capitalize cursor-pointer text-sm tracking-wide">
              Google
            </button>
            <button className="py-3 border-2 rounded-2xl  border-black bg-white hover:bg-black hover:text-white transition-all duration-300 font-semibold capitalize cursor-pointer text-sm tracking-wide">
              Facebook
            </button>
          </section>
        </section>
      </section>
    </main>
  )
}

export default page
