import React from 'react'

const AddToCartBtn = ({width,rounded,text} :{width:string,rounded:string,text:string}) => {
    return (
        <>
            <button className={`${width} bg-black text-white px-4 py-2 capitalize  ${rounded} font-semibold hover:bg-gray-800 transition-all duration-300 cursor-pointer`}>
                {text}
            </button>
        </>
    )
}

export default React.memo(AddToCartBtn)
