// import TypeWriter from "typewriter-effect";
import IG from '../assets/instagram.png';
import IN from '../assets/linkedin.png';
import GH from '../assets/github.png';
import { IcoRed } from "./partials/IcoRed";
import { SectionAboutMe } from './sections/SectionAboutMe';

export const Header = () => {
    return (
        <header id='header_about' className='w-full mx-auto h-auto md:pl-16 flex justify-center flex-col mb-10'>
            <h1 className='first-letter:text-cyan-400 text-[90px] font-extrabold'>José Sojo</h1>
            <p className='text-xl text-gray-700 font-bold'>Programador junior</p>

            <SectionAboutMe />

            <div className='bg-gray-400 p-5 rounded-md md:w-[500px] mt-4 flex justify-around'>
                <IcoRed ico={IG} red='Instagram' url='https://www.instagram.com/josesojo28?utm_source=qr&igsh=YTlmZjI0ZWMzOA==' />
                <IcoRed ico={IN} red='Linkedin' url='https://www.linkedin.com/in/jose-sojo-jaimes-1a9ab7291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' />
                <IcoRed ico={GH} red='Github' url='https://www.github.com/JoseSojo' />
            </div>
        </header>
    );
}