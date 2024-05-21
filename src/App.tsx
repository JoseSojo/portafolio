import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";

function App() {

  return (
    <div className='
      bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-gray-50
      min-h-screen w-full 
      grid
      grid-cols-1 gird-rows-[auto_1fr_auto]
      lg:grid-cols-[.3fr_1fr]
    '>
      
      <header className='col-span-3 lg:col-span-1  md:row-span-3 xl:rows-sapn-1 relative'>
        <Header />
      </header>

      <main className='col-span-3 lg:col-span-1 p-5'>
        <Body />
      </main>

      <footer className='col-span-3 lg:col-span-2 grid grid-cols-2 place-items-center bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-50'>
        <Footer />
      </footer>
      
    </div>
  )
}

export default App
