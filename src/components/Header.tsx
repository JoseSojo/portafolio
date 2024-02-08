import TypeWriter from "typewriter-effect";
import { Navbar } from './Navbar';
import { ImAccessibility, ImBubble2, ImFileText2, ImMeter, ImMug } from "react-icons/im";
import { useApp } from "../context/AppContext";

export const Header = () => {
    const app = useApp();

    const ActiveCls = 'w-[90%] lg:w-[70%] text-white dark:text-black duration-300 flex justify-center gap-5 items-center text-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-purple-500 font-bold text-center py-3 rounded-lg';
    const DisactiveCls = 'w-[90%] lg:w-[70%] hover:text-white flex justify-center gap-5 items-center duration-300 text-lg hover:bg-purple-600 font-bold text-center py-3';


    return (
        <section className='grid place-items-center grid-cols-1 lg:grid-cols-1 py-10 lg:grid-rows-[auto_1fr] gap-y-5 w-full h-full sticky top-0'>
            <h3 className='font-bebas text-2xl text-center'>
                <TypeWriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('José Sojo')
                            .pauseFor(3500)
                            .deleteAll()
                            .typeString('Programador Junior')
                            .pauseFor(3000)
                            .changeDelay("natural")
                            .start();
                      }}

                    />
            </h3>

            <div className='grid place-items-center lg:hidden relative w-full '>
                <ul className={`flex justify-center w-full px-10 mt-10 gap-5`}>
                    <li onClick={()=>app.setPayload('ABOUT')} className={`border-b-2 border-slate-400 dark:border-slate-950 hover:rounded-lg ${app.payload === 'ABOUT' ? ActiveCls : DisactiveCls}`}>
                        <ImMug />
                    </li>

                    <li onClick={()=>app.setPayload('PROJECTS')} className={`border-b-2 border-slate-400 dark:border-slate-950 hover:rounded-lg ${app.payload === 'PROJECTS' ? ActiveCls : DisactiveCls}`}>
                        <ImMeter />
                    </li>
                    
                    <li onClick={()=>app.setPayload('SKILS')} className={`border-b-2 border-slate-400 dark:border-slate-950 hover:rounded-lg ${app.payload === 'SKILS' ? ActiveCls : DisactiveCls}`}>
                        <ImAccessibility />
                    </li>
                    
                    <li onClick={()=>app.setPayload('CONTACT')} className={`border-b-2 border-slate-400 dark:border-slate-950 hover:rounded-lg ${app.payload === 'CONTACT' ? ActiveCls : DisactiveCls}`}>
                        <ImBubble2 />
                    </li>

                    <li className={`border-b-2 border-slate-400 dark:border-slate-950 hover:rounded-lg ${DisactiveCls}`}>
                        <ImFileText2 />
                    </li>
                </ul>
            </div>

            <Navbar responsive={false} />

        </section>
    );
}