import { useState } from 'react';
import SCREEN2 from '../assets/screen2.jpg';
// import SCREEN3 from '../assets/screen3.jpg';
import SCREEN4 from '../assets/screen4.jpg';
import { SectionProjects } from './sections/SectionProjects';
import { SectionSkilsMe } from './sections/SectionSkils';

type pagination = 2 | 3;

export const Body = () => {
    const [pag, setPag] = useState<pagination>(2);
    const clsH2 = 'first-letter:text-cyan-400 text-center py-4 text-4xl font-extrabold text-gray-950'

    return (
        <>
        <div className='bg-gray-400 rounded-xl p-4 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5'>
            <div onClick={()=> setPag(2)} className='group flex justify-center items-center w-full h-[250px] rounded-3xl' style={{ backgroundImage:`url(${SCREEN2})` }}>
                <p style={{textShadow: '0 0 3px #000, 0 0 5px #000, 0 0 5px #000, 0 0 5px #000'}} className=' group-hover:scale-125 group-hover:rotate-6 duration-200 text-gray-50 font-extrabold text-xl lg:text-4xl font-mono' >
                    Mis Habilidades
                </p>
            </div>
            <div onClick={()=> setPag(3)} className='group flex justify-center items-center w-full h-[250px] rounded-3xl' style={{ backgroundImage:`url(${SCREEN4})` }}>
                <p style={{textShadow: '0 0 3px #000, 0 0 5px #000, 0 0 5px #000, 0 0 5px #000'}} className='group-hover:scale-125 group-hover:rotate-6 duration-200 text-gray-50 font-extrabold text-xl lg:text-4xl font-mono' >
                    Mis Proyectos
                </p>
            </div>
        </div>

        <main className='mt-5'>
            { pag == 2 && <h2 className={clsH2}>Mis Habilidades</h2> }
            { pag == 3 && <h2 className={clsH2}>Mis Proyectos</h2> }

            { pag == 2 && <SectionSkilsMe /> }
            { pag == 3 && <SectionProjects /> }
        </main>
        </>
    )
}