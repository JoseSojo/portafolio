import { SectionWorks } from "./SectionsWork"

export const SectionProjects = () => {
    return (
        <div className='grid grid-flow-row gap-5'>
            <div className='w-full h-auto max-h-auto bg-slate-300 dark:bg-gray-700 rounded-xl p-5'>
                <h3 className='font-bebas text-3xl text-center textgray-900 dark:text-gray-50 mb-5'>Trabajos Realizados</h3>
                
                    <SectionWorks />
            </div>

            <div className='w-full h-auto max-h-auto bg-slate-300 dark:bg-gray-700 rounded-xl p-5'>
                <h3 className='font-bebas text-3xl text-center textgray-900 dark:text-gray-50 mb-5'>Proyectos Personales</h3>
                
            </div>
        </div>
    )
}