"use client"
import { Filter, X } from 'lucide-react'
import React, {  useState } from 'react'
import SetFilter from '../setFilter/SetFilter'
import getBrands from '@/apis/getBrands'
import getSubcategory from '@/apis/getSubCategory'
import { useQuery } from '@tanstack/react-query'
import FiterSkeleton from '@/loadings/FiterSkeleton'

const Filteration = () => {
    const [filter, setFitler] = useState(
        {
            category: [],
            brands: [],
            price: 0,
            dressStyle: []
        }
    )
    const [showFilter, setShowFilter] = useState(false)
    // ----------------------get brand-------------------------------------
    const { data: brands, isLoading:brandLoading } = useQuery({
        queryKey: ['brands'],
        queryFn: getBrands,
    })
    // ----------------------get subcategory-------------------------------------
    const { data: subcategory,isLoading:suCategoryLoading } = useQuery({
        queryKey: ['subcategory'],
        queryFn: getSubcategory,
    })
    // filter values=================================================
    const categories = ['men', 'women', 'kids'];
    // set filter=====================================================
    function filteration(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, checked, type } = e.target;
        setFitler((prev) => {
            //  input checkbox
            if (type === "checkbox") {
                const arr = prev[name as keyof typeof prev] as string[];

                return {
                    ...prev,
                    [name]: checked
                        ? [...arr, value]           // add
                        : arr.filter((item) => item !== value), // remove
                };
            }

            //  input range (price)
            if (type === "range") {
                return {
                    ...prev,
                    [name]: Number(value),
                };
            }

            return prev;
        })
    }
    // show & hide filteration=============================
    function showAndHideFilter(boolean: boolean) {
        setShowFilter(boolean)
    }
    if(suCategoryLoading || brandLoading){
        return <FiterSkeleton/>
    }
    return (
        <>
            <Filter className={`absolute md:hidden z-10 top-[-30px] right-5 cursor-pointer ${showFilter && "hidden"}`} onClick={() => showAndHideFilter(true)} />

            <section className={`shadow-2xl p-5 rounded-2xl md:h-fit fixed overflow-auto right-0 left-0 z-20 top-20 bottom-2   bg-white md:sticky ${!showFilter && "hidden"} md:block`}>
                <X className='absolute z-10 top-2.5  right-5 cursor-pointer md:hidden' onClick={() => showAndHideFilter(false)} />
                <section className="space-y-6  ">
                    {/* Category */}
                    <section className="border-b border-gray-200 pb-6 capitalize">
                        <h3 className="text-lg font-bold mb-4">Category</h3>
                        <section className="space-y-2">
                            {categories.map((category) => (
                                <label key={category} className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="category"
                                        className="mr-3 w-4 h-4 "
                                        value={category}
                                        onChange={(e) => filteration(e)}
                                    />
                                    <span className="text-gray-700">{category}</span>
                                </label>
                            ))}
                        </section>
                    </section>
                    {/* brands */}
                    <section className="border-b border-gray-200 pb-6 capitalize">
                        <h3 className="text-lg font-bold mb-4 capitalize">brands</h3>
                        <section className="space-y-2">
                            {brands?.map((brand:string, idx:number) => (
                                <label key={idx} className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="brands"
                                        className="mr-3 w-4 h-4 "
                                        value={brand}
                                        onChange={(e) => filteration(e)}
                                    />
                                    <span className="text-gray-700">{brand}</span>
                                </label>
                            ))}
                        </section>
                    </section>
                    {/* dressstyle */}
                    <section className="border-b border-gray-200 pb-6 capitalize">
                        <h3 className="text-lg font-bold mb-4 capitalize">dress style</h3>
                        <section className="space-y-2">
                            {subcategory?.map((dressStyle:string, idx:number) => (
                                <label key={idx} className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="dressStyle"
                                        value={dressStyle}
                                        className="mr-3 w-4 h-4 "
                                        onChange={(e) => filteration(e)}
                                    />
                                    <span className="text-gray-700 capitalize">{dressStyle}</span>
                                </label>
                            ))}
                        </section>
                    </section>
                    {/* Price */}
                    <section className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-bold mb-4">Price</h3>
                        <input
                            type="range"
                            min="0"
                            max="20000"
                            name='price'
                            className="w-full"
                            value={filter.price}
                            onChange={(e) => filteration(e)}
                        />
                        <section className="flex justify-between mt-2 text-sm text-gray-600">
                            <span>${filter.price}</span>
                            <span>$20k</span>
                        </section>
                    </section>
                    {/* Apply Filter Button */}
                    <SetFilter showAndHideFilter={showAndHideFilter} filter={filter} showFilter={showFilter} />
                </section>
            </section>

        </>
    )
}

export default React.memo(Filteration)
