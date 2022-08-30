import type { NextPage } from 'next'
import Tile from '../components/Tile/Tile'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-500 h-screen">
      <div className="flex items-center justify-center h-full gap-[3rem]">
        <div className='bg-red-500 min-h-[30rem] min-w-[30rem]'></div>
        <div className='bg-red-500 min-h-[30rem] min-w-[30rem]'></div>
        <div className='bg-red-500 min-h-[30rem] min-w-[30rem]'></div>
        <Tile>TEST</Tile>
      </div>
    </div>
  )
}

export default Home
