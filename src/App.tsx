import { SectionSkils } from "./components/SectionSkils";
import { Header } from "./components/Header";
import { SectionProjects } from "./components/SectionProjects";

function App() {

  return (
    <div className='bg-gray-950 text-gray-200 w-full p-10 min-h-screen'>

      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <Header />
        <SectionSkils />
      </div>
      
      <main className=''>

        <section className='w-full mt-10 lg:mt-0'>
          <SectionProjects />
        </section>
      </main>

    </div>
  )
}

export default App
