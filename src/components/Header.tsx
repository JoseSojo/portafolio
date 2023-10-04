import TypeWriter from "typewriter-effect";
import { CardId } from "./CardID";

export const Header = () => {
    return (
        <header className='w-[90%] md:w-[40%]'>
            <CardId>
                <aside>
                    <h1 className='font-mono text-2xl text-gray-200'>
                        <TypeWriter 
                            onInit={typewriter => {
                            typewriter
                                .typeString('Hola mi nomber es, Jose Sojo...')
                                .start();              
                            }}
                        />
                    </h1>
                    <h3 className='font-mono text-xl text-gray-400'>
                        <TypeWriter 
                            onInit={typewriter => {
                            typewriter
                                .pauseFor(4000)
                                .typeString('soy prog')
                                .deleteAll()
                                .typeString('soy programador junior')
                                .start();              
                            }}
                        />
                    </h3>
                </aside>
            </CardId>
        </header>
    );
}