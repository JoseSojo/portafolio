import { useState } from "react";

export const CopyEmail = () => {
    const [buttonText, setButtonText] = useState<'copiar'|'copiado'>('copiar');

    return (
        <div className='w-full grid grid-cols-[75%_25%]'>
            <span className='rounded-l-lg p-5 py-3 border-t border-b border-l font-light text-xl bg-gray-200 dark:bg-gray-900'>josesojo2828@gmail.com</span>
            <button 
                onClick={async ()=>{
                    await navigator.clipboard.writeText('josesojo2828@gmail.com');
                    setButtonText('copiado');
                }}
                className='bg-green-500 hover:bg-green-700 duration-200 dark:text-gray-950 text-gray-50 font-bold rounded-r-lg p-3'
            >
                {buttonText}
            </button>
        </div>
    );
}
