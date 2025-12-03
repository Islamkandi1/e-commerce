"use client"
import getProductdetails from '@/apis/getProductDetails';
import { AddToCart } from '@/cartAction/addToCart';
import { redirect } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { ScaleLoader } from 'react-spinners';

const AddToCartBtn = ({ width, rounded, text, id, count }: { width: string, rounded: string, text: string, id: number, count: number }) => {
    const [isLoading, serIsloading] = useState(false)

    async function buttonAction() {
        serIsloading(true)
        const data = await getProductdetails(id)
        const res = await AddToCart(data, count)
        if (res.status === "not auth") {
            toast.error("Please login first");
            setTimeout(() => redirect("/login"), 700);
            return;
        }



        if (res.error) {
            toast.error("something went wrong")
        } else {
            toast.success("product add successfully")
        }
        serIsloading(false)
    }

    return (
        <>
            <button onClick={buttonAction} className={`${width} bg-black text-white px-4 py-2 capitalize  ${rounded} font-semibold hover:bg-gray-800 transition-all duration-300 cursor-pointer`}>
                {isLoading ? <ScaleLoader
                    color="#fff"
                    height={20}
                    width={3}
                /> : text}
            </button>
        </>
    )
}

export default AddToCartBtn
