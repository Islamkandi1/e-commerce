"use client"
import React from 'react'
import TanstackProvider from './app/_components/tanstackProvider/TanstackProvider'
import { SessionProvider } from 'next-auth/react'

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <TanstackProvider>
                <SessionProvider >
                    {children}
                </SessionProvider>
            </TanstackProvider>
        </>
    )
}

export default Provider
