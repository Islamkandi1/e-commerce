"use client"
import getProductdetails from '@/apis/getProductDetails';
import { AddToCart } from '@/cartAction/addToCart';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { redirect } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import { ScaleLoader } from 'react-spinners';

const AddToCartBtn = ({ width, rounded, text, id, count }: { width: string, rounded: string, text: string, id: number, count: number }) => {


    // ----------------------------take action---------------------------------------------
    async function buttonAction() {
        const data = await getProductdetails(id)
        const res = await AddToCart(data, count)
        if (res.status === "not auth") {
            toast.error("Please login first");
            setTimeout(() => redirect("/login"), 700);
            return;
        }

        if (res.error) {
            throw new Error("something went wrong" )
        } else {
            return true
        }

    }
    // --------------------------handle it with tanstack query----------------------------------------
    const queryClient = useQueryClient() 
    const { mutate,isPending} = useMutation({
        mutationFn:buttonAction,
        onSuccess:()=>{
            toast.success("product add successfully")
            queryClient.invalidateQueries({
                queryKey:["cart"]
            })
            
        },
        onError:()=>{
            toast.error("some thing went wrong")
        }
    })
    return (
        <>
            <button onClick={()=>mutate()} className={`${width} bg-black text-white px-4 py-2 capitalize  ${rounded} font-semibold hover:bg-gray-800 transition-all duration-300 cursor-pointer`}>
                {isPending ? <ScaleLoader
                    color="#fff"
                    height={20}
                    width={3}
                /> : text}
            </button>
        </>
    )
}

export default AddToCartBtn
