import { Filter } from '@/types/filter.type'
import React from 'react'

const SetFilter = ({ showAndHideFilter, filter, showFilter }: { showAndHideFilter: (showFilter: boolean) => void, filter: Filter, showFilter: boolean }) => {
    // const params = new URLSearchParams()

    // apply filter=====================================================
    function setFitler() {
        if (showFilter) {
            showAndHideFilter(false)
        }
        const params = new URLSearchParams(window.location.search);

        // clear old values first
        params.delete("category");
        params.delete("brands");
        params.delete("dressStyle");
        params.delete("price");
        params.delete("page");
        // category[]
        if (filter.category.length > 0) {
            filter.category.forEach((c) => params.append("category", c));
        }

        // brands[]
        if (filter.brands.length > 0) {
            filter.brands.forEach((b) => params.append("brands", b));
        }

        // dressStyle[]
        if (filter.dressStyle.length > 0) {
            filter.dressStyle.forEach((s) => params.append("dressStyle", s));
        }

        // price (single value)
        if (filter.price > 0) {
            params.set("price", filter.price.toString());
        }

        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.pushState({}, "", newUrl);
    }

    return (
        <>
            <button onClick={() => setFitler()} className="w-full transition-all duration-300 cursor-pointer bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800">
                Apply Filter
            </button>
        </>
    )
}

export default React.memo(SetFilter)
