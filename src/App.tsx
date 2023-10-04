import { SectionSkils } from "./components/SectionSkils";
import { Header } from "./components/Header";
import { SectionProjects } from "./components/SectionProjects";

function App() {

  return (
    <div className='bg-gray-950 text-gray-200 w-screen min-h-screen flex justify-center items-center flex-col'>

      <Header />
      
      <main className='w-screen flex justify-center items-center flex-col mt-8'>
        <section className='w-[90%] md:w-[60%]'>
          <SectionSkils sec='Habilidades' />
        </section>

        <section className='w-[90%]'>
          <SectionProjects sec='Proyectos' />
        </section>
      </main>

    </div>
  )
}

export default App
