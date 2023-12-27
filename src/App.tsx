import { SectionSkils } from "./components/SectionSkils";
import { Header } from "./components/Header";
import { Body } from "./components/Body";

function App() {

  return (
    <div className='bg-gray-100 text-gray-900 w-full p-10 min-h-screen'>

      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <Header />
        <SectionSkils />
      </div>
      
      <Body />

    </div>
  )
}

export default App
