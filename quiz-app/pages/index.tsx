import type { NextPage } from 'next'
import Tile from '../components/Tile/Tile'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-500 h-screen">
      <div className="flex items-center justify-center h-full gap-[3rem]">
        <Tile className="bg-gradient-to-tr to-blue-400 from-green-500">Dołącz do rozgrywki</Tile>
        <Tile className="bg-gradient-to-tr to-red-400 from-indigo-500">Dodaj pytanie</Tile>
        <Tile className="bg-gradient-to-tr to-lime-400 from-yellow-500">Ranking</Tile>
      </div>
    </div>
  )
}

export default Home
