import { deleteItem } from '@/cartAction/deleteItem'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { X } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'
import { ClipLoader } from 'react-spinners'

const DeleteCartItem = ({ id }: { id: string }) => {

    // --------------------------------delete item-------------------------------------------
    const queryClient = useQueryClient()
    
    const { mutate, isPending } = useMutation({
        mutationFn: deleteItem,
        onSuccess: () => {
            toast.success("product deleted successfully")
            queryClient.invalidateQueries({
                queryKey: ["cart"]
            })
            
        },
        onError: () => {
            toast.error("some thing went wrong")
        }
    })


    return (
        <>
            <button
                className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
                onClick={() => mutate(id)}
            >
                {isPending ? <ClipLoader
                    color="red"
                    size={15}
                /> : <X className="w-5 h-5" />}

            </button>
        </>
    )
}

export default DeleteCartItem
