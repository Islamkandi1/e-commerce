import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard({width}:{width:string}) {
    return (

        <div className={`flex flex-col space-y-3 ${width} shadow-2xl `}>
            <Skeleton className={`h-[300px] ${width} rounded-xl bg-[#b3b0b1]`} />
            <div className="space-y-2 p-5">
                <Skeleton className="h-5 mb-4  bg-[#b3b0b1]" />
                <Skeleton className="h-8   mb-3 bg-[#b3b0b1]" />
                <section className="flex items-center gap-3 mb-4">
                    <Skeleton className="h-7 w-7 rounded-full bg-[#b3b0b1]" />
                    <Skeleton className="h-7 w-7 rounded-full bg-[#b3b0b1]" />
                </section>
                <section className="flex justify-between items-center">
                    <Skeleton className="h-4 w-[60px] mb-3 bg-[#b3b0b1]" />
                    <Skeleton className="h-8 w-[100px] mb-3 bg-[#b3b0b1]" />
                </section>
            </div>
        </div>


    )
}
