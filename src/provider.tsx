"use client"
import React from 'react'
import TanstackProvider from './app/_components/tanstackProvider/TanstackProvider'
import { SessionProvider } from 'next-auth/react'
import { Navbar } from './app/_components/navbar/Navbar'

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <TanstackProvider>
                <SessionProvider >
                    <Navbar />
                    {children}
                </SessionProvider>
            </TanstackProvider>
        </>
    )
}

export default Provider
