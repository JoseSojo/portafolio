
interface Props {
    previw: any,
    title: string,
    tecnologies: any[],
    url: string
}

export const CardProject: React.FC<Props> = ({ previw, title, tecnologies, url }) => {

    return (
        <aside className='flex flex-col items-center w-full group bg-gray-950 rounded-md duration-300'>
            <img src={previw} className='w-full object-cover h-[250px] rounded-t-md' />
            <h3 className='font-bold text-gray-100 text-xl mt-3'>{title}</h3>
            <div className='w-full flex justify-center gap-4 items-center my-3 duration-300'>
                {
                    tecnologies.map((item) => (
                        <img key={item} src={item} className='w-9 h-9' />
                    ))
                }
            </div>
            <a href={url} className='font-bold py-4 bg-blue-600 hover:bg-blue-700 w-full text-center rounded-b-md text-white'>
                visitar
            </a>
        </aside>
    )
}

