
interface CardIDProps {
    ico: any,
    skil: string,
}

export const CardSkil = ({ico, skil}: CardIDProps) => {
    const clsImg = `
        ${skil == 'NPM' ? 'lg:h-16 h-11 w-20 lg:w-28' : 'lg:h-16 h-11'}
        group-hover:-translate-y-5 group-hover:scale-100 scale-125 duration-200 mb-5 translate-y-5
        `
    
    const clsSection = `group w-full bg-gray-100 rounded-xl flex flex-col items-center` 

    return (
        <section className={clsSection}>
            <img 
                src={ico} 
                className={clsImg}
                />
            <span className='font-bold text-xl scale-0 group-hover:scale-100 -translate-y-5 duration-300'>{skil}</span>
            <b></b>
        </section>
    );
}
