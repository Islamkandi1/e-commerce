import { OrderProducts } from '@/types/order.type'
import React from 'react'
import OrderProduct from '../orderProduct/OrderProduct'

const OrderTable = ({product}:{product:OrderProducts}) => {
    return (
        <>
            <section className="mb-6 rounded-2xl border border-gray-200 shadow-md overflow-hidden bg-linear-to-br from-gray-50 to-white">
                <section className="bg-gray-100 px-3 py-4 border-b border-gray-200">
                    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <section>
                            <h3 className="text-sm font-semibold text-gray-700 mb-1">Purchase Date</h3>
                            <p className="text-slate-600 font-medium">{product.created_at.split("").slice(0,10).join("")}</p>
                        </section>
                        <section className="  text-center">
                            <h3 className="text-sm font-semibold text-gray-700 mb-1">Order ID</h3>
                            <p className="text-slate-600 font-medium">ORD-{product.id}</p>
                        </section>
                        <section className=" md:text-center">
                            <h3 className="text-sm font-semibold text-gray-700 mb-1">Payment Type</h3>
                            <p className="text-slate-600 font-medium">{product.id}</p>
                        </section>
                        <section className=" text-center">
                            <h3 className="text-sm font-semibold text-gray-700 mb-1">Total Paid</h3>
                            <p className="text-gray-900 font-bold">{product.total} <span className="font-semibold">EGP</span>
                            </p>
                        </section>
                    </section>
                </section>
                {product?.products?.map((item) => <OrderProduct key={item.id} item={item} />)}
            </section>
        </>
    )
}

export default OrderTable
