"use client"
import React, { useState } from 'react';
import { ShoppingBag, Heart, Menu, X, User } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';


export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathName = usePathname()
    const { data: session, status } = useSession()
    console.log(session);

    return (
        <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 capitalize">
            <section className="mx-2 md:mx-15 flex py-3 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center capitalize gap-2 text-[1.9rem] font-extrabold tracking-tighter">
                    shop.co
                </Link>

                {/* Desktop Nav */}
                <section className="hidden md:flex items-center gap-6">
                    <Link
                        href="/"
                        className={`text-[.98rem] font-medium  hover:text-gray-500 transition-all duration-300 ${pathName == "/" && "text-gray-500"}  `}
                    >
                        home
                    </Link>
                    <Link
                        href="/products"
                        className={`text-[.98rem] font-medium  hover:text-gray-500 transition-all duration-300 ${pathName == "/products" && "text-gray-500"}`}
                    >
                        Products
                    </Link>
                    <Link
                        href="/brands"
                        className={`text-[.98rem] font-medium  hover:text-gray-500 transition-all duration-300 ${pathName == "/brands" && "text-gray-500"}`}
                    >
                        Brands
                    </Link>
                    <Link
                        href="/orders"
                        className={`text-[.98rem] font-medium  hover:text-gray-500 transition-all duration-300 ${pathName == "/orders" && "text-gray-500"}  `}
                    >
                        Orders
                    </Link>
                </section>

                {/* auth Actions */}
                {status == "authenticated" && <section className="flex items-center gap-4">
                    <Link href="/favorites">
                        <Heart className="h-5 w-5" />
                    </Link>
                    <Link href="/cart">
                        <ShoppingBag className="h-5 w-5" />
                    </Link>
                    <User className="h-5 w-5" />

                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </section>}

                {/* unAuth action */}
                {status == "unauthenticated" && <section>
                    <section className="flex gap-3 flex-wrap">
                        {/* Login Button */}
                        <Link href="/login"
                            className="px-3 py-1 rounded-xl  text-black hover:text-gray-500  font-medium capitalize  transition-all duration-300  active:scale-94"
                        >
                            signIn
                        </Link>

                        {/* Register Button */}
                        <Link href="/register"
                            className="px-3 py-1 rounded-xl bg-black text-white border border-black font-medium capitalize  transition-all duration-300 hover:bg-[#353535] hover:rounded-2xl active:scale-95"
                        >
                            register
                        </Link>
                    </section>
                </section>}

            </section>

            {/* Mobile Menu */}

            <section className={`md:hidden ${isMobileMenuOpen ? "h-[180px] p-4" : "h-0"} transition-all duration-300 overflow-hidden border-t  bg-background animate-in slide-in-from-top-5`}>
                <section className="flex flex-col gap-4">
                    <Link
                        href="/"
                        className={`text-[.98rem] font-medium transition-colors hover:text-primary `}
                    >
                        home
                    </Link>
                    <Link
                        href="/products"
                        className={`text-[.98rem] font-medium transition-colors hover:text-primary `}
                    >
                        Product
                    </Link>
                    <Link
                        href="/brands"
                        className={`text-[.98rem] font-medium transition-colors hover:text-primary `}
                    >
                        Brands
                    </Link>
                    <Link
                        href="/orders"
                        className={`text-[.98rem] font-medium transition-colors hover:text-primary `}
                    >
                        orders
                    </Link>
                </section>
            </section>

        </nav>
    );
};
