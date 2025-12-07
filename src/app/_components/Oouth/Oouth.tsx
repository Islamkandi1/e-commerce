"use client"
import React from 'react'
import { signIn } from 'next-auth/react'
const Oouth = () => {

     function loginByGoogle() {
         signIn("google", {
            callbackUrl: "/"
        })
    }
    return (
        <>
            {/* Social Buttons */}
            <section className="">
                <button type="button" onClick={loginByGoogle} className="py-3 w-full border-2 rounded-2xl  border-black bg-white hover:bg-black hover:text-white transition-all duration-300 font-semibold capitalize cursor-pointer text-sm tracking-wide">
                    Google
                </button>
            </section>
        </>
    )
}

export default Oouth
