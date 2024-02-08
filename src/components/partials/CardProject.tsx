
interface Props {
    preview: string,
    title: string,
    tecnologies?: string[],
    url: string | null,
    description: string,
    role: string,
}

export const CardProject: React.FC<Props> = ({ preview, title, description, tecnologies, url }) => {

    return (
        <div 
            className="relative w-full rounded-xl border border-white dark:border-black grid grid-cols-[.6fr_1fr]"
        >
            <div className="relative h-56 overflow-hidden rounded-l-xl">
                <img src={preview} className='w-full h-full' />
            </div>
            <div className='flex justify-center items-center flex-col'>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl text-center font-semibold leading-snug tracking-normal antialiased">
                        {title}
                    </h5>
                    <div className='flex justify-center gap-5'>
                        {
                            tecnologies
                            ? tecnologies.map((item,i) => (
                                <img src={item} className='w-11 h-auto' key={`key-${item}-pw-${i}`} />
                            ))
                            : <p className='text-gray-400 text-sm font-bold'>sistema privado</p>
                        }
                    </div>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        {description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    {
                        url
                        ? <a href={url} target='_blank' className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Visitar
                        </a>
                        : <span className='bg-gray-800 text-gray-400 px-4 py-2 rounded-md align-middle font-sans text-xs font-bold uppercase'>
                            privado
                        </span>          
                    }
                </div>
            </div>
        </div>
    )
}

