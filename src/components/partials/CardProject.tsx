
interface Props {
    preview: any,
    title: string,
    tecnologies: any[],
    url: string
}

export const CardProject: React.FC<Props> = ({ preview, title, tecnologies, url }) => {

    return (
        <aside 
            className='grid w-full group bg-gray-100 h-[300px] rounded-xl shadow-lg shadow-gray-700 duration-300'
        >
            <div 
                className='w-full h-full rounded-xl'
                style={{ backgroundImage:`url(${preview})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%' }}
            >
                <div className='opacity-0 group-hover:opacity-100 grid grid-rows-[auto_1fr_auto] h-full duration-700'>
                    <h3 className='font-extrabold text-gray-950 text-center text-4xl mt-3'>{title}</h3>
                    <div className='w-full flex justify-center items-end gap-4 my-3 duration-300'>
                        {
                            tecnologies.map((item) => (
                                <img key={item} src={item} className='w-11 h-11' />
                            ))
                        }
                    </div>
                    <a href={url} target='_self' className='font-bold py-4 bg-blue-600 hover:bg-blue-700 w-full text-center rounded-b-xl text-white'>
                        visitar
                    </a>
                </div>
            </div>
        </aside>
    )
}

