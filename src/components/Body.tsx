
import SCREEN2 from '../assets/screen2.jpg';
import SCREEN1 from '../assets/screen1.jpg';
import SCREEN4 from '../assets/screen4.jpg';
import { SectionProjects } from './sections/SectionProjects';
import { SectionSkilsMe } from './sections/SectionSkils';


export const Body = () => {
    const clsH2 = 'first-letter:text-cyan-400 text-center py-4 text-4xl font-extrabold text-gray-950 mt-5'

    return (
        <>
        <div className='bg-gray-400 rounded-xl p-4 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5'>
            <a href='#header_about'><div className='group flex justify-center items-center w-full h-[250px] rounded-3xl' style={{ backgroundImage:`url(${SCREEN1})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%' }}>
                <p style={{textShadow: '0 0 3px #000, 0 0 5px #000, 0 0 5px #000, 0 0 5px #000'}} className=' group-hover:scale-125 group-hover:rotate-6 duration-200 text-gray-50 font-extrabold text-xl lg:text-4xl font-mono' >
                    ¿Quien soy?
                </p>
            </div></a>
            <a href='#section_skils'><div className='group flex justify-center items-center w-full h-[250px] rounded-3xl' style={{ backgroundImage:`url(${SCREEN2})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%' }}>
                <p style={{textShadow: '0 0 3px #000, 0 0 5px #000, 0 0 5px #000, 0 0 5px #000'}} className=' group-hover:scale-125 group-hover:rotate-6 duration-200 text-gray-50 font-extrabold text-xl lg:text-4xl font-mono' >
                    Mis Habilidades
                </p>
            </div></a>
            <a href='#section_projects'><div className='group flex justify-center items-center w-full h-[250px] rounded-3xl' style={{ backgroundImage:`url(${SCREEN4})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%' }}>
                <p style={{textShadow: '0 0 3px #000, 0 0 5px #000, 0 0 5px #000, 0 0 5px #000'}} className='group-hover:scale-125 group-hover:rotate-6 duration-200 text-gray-50 font-extrabold text-xl lg:text-4xl font-mono' >
                    Mis Proyectos
                </p>
            </div></a>
        </div>

        <main className='mt-5'>
            <h2 id='section_skils' className={clsH2}>Mis Habilidades</h2>
            <SectionSkilsMe />


            <h2 id='section_projects' className={clsH2}>Mis Proyectos</h2>
            <SectionProjects />
        </main>
        </>
    )
}