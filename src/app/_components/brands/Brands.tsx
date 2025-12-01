"use client"
import getBrands from '@/apis/getBrands'
import { useQuery } from '@tanstack/react-query'
import BrandsSkeleton from './../../../loadings/brandsSkeleton';
import toast from 'react-hot-toast';

const GetBrands = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["brands"],
        queryFn: () => getBrands()
    })  

if(isError){
    toast.error(error.message)
}
    return (
        <main>
            <section className='mx-2 md:mx-15 pt-12'>
                <section className="  p-2 pt-12">
                    {/* Header */}
                    <section className=" mx-auto mb-12">
                        <h1 className="text-5xl md:text-7xl   mb-4 text-center uppercase font-bold">
                            Our Brands
                        </h1>
                        <p className="text-gray-400 text-center text-lg mb-8">
                            Discover the world  s most iconic brands
                        </p>
                    </section>
                    {/* Brands Grid */}
                    <section className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {isLoading && <BrandsSkeleton />}
                        {data?.map((brand: string, idx: number) => (
                            <section
                                key={idx}
                                className="group relative"
                            >
                                {/* Card */}
                                <section className={`relative h-64 rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 ease-out scale-100 hover:scale-105 shadow-2xl hover:shadow-purple-500/50`}>
                                    {/* Background Gradient */}
                                    <section className={`absolute inset-0 bg-linear-to-br from-gray-800 to-black transition-all duration-500 hover:scale-110  scale-100`} />
                                    {/* Overlay Pattern */}
                                    <section className="absolute inset-0 opacity-10">
                                        <section className="absolute inset-0" style={{
                                            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                                            backgroundSize: '20px 20px'
                                        }} />
                                    </section>

                                    {/* Content */}
                                    <section className="relative h-full flex items-center justify-center p-6">
                                        {/* Brand Name */}
                                        <section>
                                            <h3 className={`text-4xl font-bold text-white capitalize text-center mb-2 transition-all duration-300 hover:scale-110 hover:-translate-y-2 scale-100`}>
                                                {brand}
                                            </h3>

                                        </section>
                                    </section>

                                    {/* Hover Overlay */}
                                    <section className={`absolute inset-0 bg-black/20 hover:backdrop-blur-sm transition-opacity duration-300 hover:opacity-100 opacity-0 flex items-center justify-center`}>
                                        <button className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            Explore
                                        </button>
                                    </section>
                                </section>

                                {/* Glow Effect */}
                                <section className={`absolute  inset-0 rounded-3xl bg-linear-to-br from-gray-800 to-black blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
                            </section>
                        ))}
                    </section>
                </section>
            </section>
        </main>
    )
}

export default GetBrands
