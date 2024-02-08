import SCREEN1 from '../../assets/uifaces-cartoon-image (20).jpg'
import { SocialMedia } from "../partials/SocialMedia";
import { FAVORITE_SKILS } from '../../definitions/skills.d';
import { SectionWorks } from './SectionsWork';
import { CopyEmail } from '../partials/CopyEmail';

interface Props {}

export const SectionAboutMe: React.FC<Props> = ({}) => {
    
    return (
        <section className='p-5 lg:p-10 grid grid-rows-[auto_1fr] gap-y-5 relative z-10'>
            <div className='
                w-full h-auto max-h-auto 
                bg-slate-300 dark:bg-gray-700 
                relative rounded-xl p-5 grid gap-5 
                grid-cols-1 md:grid-cols-2'>
                <div className='grid grid-rows-[auto_1fr_auto] gap-y-7'>
                    <header className='flex justify-center items-center gap-x-5'>
                        <div className='hidden md:grid place-items-center'>
                            <img src={SCREEN1} className='object-cover rounded-full w-24 h-24' />
                        </div>
                        <h2 className='font-bebas text-5xl'>Soy, José Sojo</h2>
                    </header>
                    <p className='font-montserrat text-lg text-gray-900 dark:text-gray-200 text-center font-light'>
                        ¡Hola! Soy <strong>José Sojo</strong>, un programador web Javascript con 
                        <strong>+1 año de experiencia.</strong> siempre buscando nuevas formas de 
                        convertir ideas en realidad. <strong>¡Hagamos que tus ideas 
                        cobren vida! ✨</strong>
                    </p>
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='w-full h-auto max-h-auto border rounded-xl p-5'>
                            <h3 className='font-bebas text-3xl text-center textgray-900 dark:text-gray-50 mb-5'>Mis Skils Favoritas</h3>
                            <div className='flex flex-wrap justify-center items-center gap-5'>
                                {
                                    FAVORITE_SKILS.map(key => (
                                        <aside>
                                            <img src={key.preview} className='w-11 h-11' />
                                        </aside>
                                    ))
                                }
                            </div>
                        </div>

                        <CopyEmail />

                        <footer className='grid grid-cols-[auto_auto_1fr] gap-x-5 text-4xl'>
                            <SocialMedia />
                            <button></button>
                        </footer>
                </div>
            </div>

            <div className='grid gird-cols-1 gap-5'>
                

            <div className='w-full h-auto max-h-auto bg-slate-300 dark:bg-gray-700 rounded-xl p-5'>
                <h3 className='font-bebas text-3xl text-center textgray-900 dark:text-gray-50 mb-5'>Trabajos Realizados</h3>
                
                    <SectionWorks />
                </div>
            </div>

        </section>
    )
}
