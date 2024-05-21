import {
    ALL_SKILS
} from '../../definitions/skills.d';

interface Props {}

export const SectionSkils: React.FC<Props> = ({}) => {

    return (
        <>
            <h3 className='text-5xl font-montserrat font-bold mt-5'>Todas</h3>

            <div className='my-10 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 gap-y-8 place-items-center'>
                {
                    ALL_SKILS.map((sk,i) =>(
                        <img src={sk.preview} key={`all-${i}-${sk.name}`} className='w-9 h-7' />
                    ))  
                }
            </div>
            <div className='grid gap-3'>
                <p className='p-3 px-5 rounded-lg bg-gray-800 text-center font-semibold'>Conocimiento en diseño web</p>
                <p className='p-3 px-5 rounded-lg bg-gray-800 text-center font-semibold'>Conocimiento en programación Frontend con React</p>
                <p className='p-3 px-5 rounded-lg bg-gray-800 text-center font-semibold'>Conocimiento en programación Backend con Express (js) y Symfony (php)</p>
                <p className='p-3 px-5 rounded-lg bg-gray-800 text-center font-semibold'>Conocimiento en bases de datos SQL y NoSql</p>
                <p className='p-3 px-5 rounded-lg bg-gray-800 text-center font-semibold'>Actualmente estoy reforzando mis conocimientos en programación Fronent y backend, con proyectos personales</p>
                <p className='p-3 px-5 rounded-lg bg-gray-800 text-center font-semibold'>Intentando aprender cosas nuevas todos los días</p>
            </div>
        </>
    )
}
