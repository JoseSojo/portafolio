import React from "react";

interface CardIDProps {
    titleId?: string,
    children: React.ReactNode
}

export const CardId = ({children, titleId}: CardIDProps) => {
    return (
        <div className='w-full'>
            <div className='translate-y-7 w-[100%] flex gap-2 ml-2'>
                <span className='w-3 h-3 rounded-full bg-red-500'></span>
                <span className='w-3 h-3 rounded-full bg-green-500'></span>
                <span className='w-3 h-3 rounded-full bg-blue-500'></span>
                {titleId && <span className='font-mono text-gray-500 font-bold text-sm'>$_ {titleId}</span>}
            </div>

            <div className='w-full pt-12 pb-5 px-10 bg-gray-900 rounded-lg'>
                {children}
            </div>
            
        </div>
    );
}
