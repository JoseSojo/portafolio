import { ImAccessibility, ImMug, ImFileText2 } from "react-icons/im";
// import { SocialMedia } from "./partials/SocialMedia";
import { useApp } from "../context/AppContext";
import { FC } from "react";
import CV from '../assets/cv.pdf';
import { DownloadCv } from "./partials/DownloadCV/DownloadCV";

interface Props {
    responsive: boolean
}

export const Navbar: FC<Props> = ({responsive}) => {
    const app = useApp();

    const ActiveCls = 'w-[90%] lg:w-[70%] text-white dark:text-black duration-300 flex justify-center gap-5 items-center text-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-purple-500 font-bold text-center py-3 rounded-lg';
    const DisactiveCls = 'w-[90%] lg:w-[70%] hover:text-white flex justify-center gap-5 items-center duration-300 text-lg hover:bg-purple-600 font-bold text-center py-3';

    const NavCls = responsive
        ? 'block lg:hidden absolute bg-black top-10 w-[50vw] right-0 z-90 rounded-b-2xl rounded-tl-2xl py-4'
        : 'hidden lg:block w-full'

    return (
        <nav className={`${NavCls}`}>
            <ul className={`grid grid-cols-1 place-items-center mt-10 gap-y-5 ${ responsive ? 'p-y10 px-5' : ''}`}>
                <li onClick={()=>app.setPayload('ABOUT')} className={`border-b-2 border-slate-400 dark:border-slate-950 hover:rounded-lg ${app.payload === 'ABOUT' ? ActiveCls : DisactiveCls}`}>
                    <ImMug />
                    Presentación 
                </li>

                {/* <li onClick={()=>app.setPayload('PROJECTS')} className={`border-b-2 border-slate-400 dark:border-slate-950 hover:rounded-lg ${app.payload === 'PROJECTS' ? ActiveCls : DisactiveCls}`}>
                    <ImMeter />
                    Proyectos
                </li> */}
                
                <li onClick={()=>app.setPayload('SKILS')} className={`border-b-2 border-slate-400 dark:border-slate-950 hover:rounded-lg ${app.payload === 'SKILS' ? ActiveCls : DisactiveCls}`}>
                    <ImAccessibility />
                    Habilidades
                </li>
                
                {/* <li onClick={()=>app.setPayload('CONTACT')} className={`border-b-2 border-slate-400 dark:border-slate-950 hover:rounded-lg ${app.payload === 'CONTACT' ? ActiveCls : DisactiveCls}`}>
                    <ImBubble2 />
                    Contacto
                </li> */}

                <a href={CV} target='_blank' className={`border-b-2 border-slate-400 dark:border-slate-950 hover:rounded-lg ${DisactiveCls}`}>
                    <ImFileText2 />
                    Curriculum
                </a>

                <li className={`text-4xl flex gap-x-5`}>
                    <DownloadCv />
                    {/* <SocialMedia /> */}
                </li>
            </ul>
        </nav>
    )
}
