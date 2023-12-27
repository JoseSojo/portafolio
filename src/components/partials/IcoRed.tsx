
interface Props {
    ico: any,
    red: string,
    url: string
}

export const IcoRed: React.FC<Props> = ({ ico, red, url }) => {

    return (
        <a href={url} target="_blank" className='group flex flex-col justify-center items-center transitiona-all duration-200'>
            <img src={ico} className='w-14 h-14 group-hover:scale-150 transitiona-all duration-200' />
            <span className='font-bold text-white group-hover:scale-0 transitiona-all duration-200'>{red}</span>
        </a>
    )
}
