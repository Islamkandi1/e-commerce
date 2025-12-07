import React from 'react'
import { Minus, Plus } from 'lucide-react';
import { Item } from '@/types/cart.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCartQuantity } from '@/cartAction/updateCart';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners'
const UpdateCart = ({ item }: { item: Item }) => {

    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationFn: updateCartQuantity,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] })
            toast.success("Cart updated successfully")
        },
        onError: () => {
            toast.error("Failed to update cart")
        }
    })
    return (
        <section className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-2">
            {isPending ? <ClipLoader
                color="gray"
                size={15}
            /> : <>
                <button
                    onClick={() => mutate({ id: item.id, increment: -1 })}
                    className="hover:bg-gray-200 rounded-full p-1 transition-colors cursor-pointer"
                >
                    <Minus className="w-4 h-4" />
                </button>
                <span className="font-semibold w-8 text-center">{item.quantity}</span>
                <button
                    onClick={() => mutate({ id: item.id, increment: 1 })}
                    className="hover:bg-gray-200 rounded-full p-1 transition-colors cursor-pointer"
                >
                    <Plus className="w-4 h-4" />
                </button>
            </>}

        </section>
    )
}

export default UpdateCart
