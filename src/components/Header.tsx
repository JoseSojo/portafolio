// import TypeWriter from "typewriter-effect";
import IG from '../assets/instagram.png';
import IN from '../assets/linkedin.png';
import GH from '../assets/github.png';
import { IcoRed } from "./partials/IcoRed";

export const Header = () => {
    return (
        <header className='w-full mx-auto md:h-[450px] md:pl-16 flex justify-center flex-col'>
            <h1 className='first-letter:text-cyan-400 text-[80px] font-extrabold'>José Sojo</h1>
            <p className='text-lg text-gray-400 font-bold'>Programador junior frotent</p>
            <div className='bg-gray-900 p-5 rounded-md md:w-[500px] mt-4 flex justify-around'>
                <IcoRed ico={IG} red='Instagram' url='https://www.instagram.com/josesojo28?utm_source=qr&igsh=YTlmZjI0ZWMzOA==' />
                <IcoRed ico={IN} red='Linkedin' url='https://www.linkedin.com/in/jose-sojo-jaimes-1a9ab7291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' />
                <IcoRed ico={GH} red='Github' url='https://www.github.com/JoseSojo' />
            </div>
        </header>
    );
}