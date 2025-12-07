"use client"
import checkOut from '@/cartAction/checkOut'
import clearCart from '@/cartAction/deleteAllCart'
import getAllCart from '@/cartAction/getCard'
import { Total } from '@/types/total.type'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { ScaleLoader } from 'react-spinners'

const CheckOut = ({ total }: { total: Total | undefined }) => {
    const [isLoading, setIsLoading] = useState(false)
    const queryClient = useQueryClient();
    // -----------------------------------------clear cart-------------------------------------------
    const { mutate } = useMutation({
        mutationFn: clearCart,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
        },
        onError: () => {
            toast.error("Failed to clear cart");
        },
    });
    // -------------------------------------check out------------------------------------------------
    async function checkout() {
        setIsLoading(true)
        const { data: cartData } = await getAllCart()
        const { error } = await checkOut(cartData, total)
        if (error) {
            toast.error(error.message)
        } else {
            mutate()
            redirect("/confirmOrder")
        }
        setIsLoading(false)
    }


    return (
        <button type="button" onClick={checkout} className="w-full cursor-pointer bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            {isLoading ? <ScaleLoader
                color="#fff"
                height={20}
                width={3}
            /> : "Go to Checkout →"}
        </button>
    )
}

export default CheckOut
