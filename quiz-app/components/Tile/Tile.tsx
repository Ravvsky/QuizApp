import React from 'react'

const Tile = (props) => {

    return <div className='bg-red-500 min-h-[30rem] min-w-[30rem]'>{props.children}</div>
}

export default Tile