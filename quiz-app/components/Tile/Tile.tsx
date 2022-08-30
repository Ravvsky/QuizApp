import React from 'react'

const Tile = (props:any) => {

    return <div className={`min-h-[30rem] min-w-[30rem] w-min rounded-[1rem] flex justify-center items-center shadow-2xl text-white text-[3rem] font-[700] uppercase text-center ${props.className}`}>{props.children}</div>
}

export default Tile