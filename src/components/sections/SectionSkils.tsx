import {
    ALL_SKILS,
    FAVORITE_SKILS
} from '../../definitions/skills.d';

interface Props {}

export const SectionSkils: React.FC<Props> = ({}) => {

    return (
        <>
            <h3 className='text-5xl font-montserrat font-bold mt-5'>Favoritas</h3>
            <div className='mt-5 p-5 bg-gray-300 dark:bg-gray-700 rounded-xl flex flex-wrap justify-center gap-6 lg:gap-10'>
                {
                    FAVORITE_SKILS.map((sk,i) =>(
                        <img src={sk.preview} key={`all-${i}-${sk.name}`} className='w-11 h-11' />
                    ))
                }
            </div>

            <h3 className='text-5xl font-montserrat font-bold mt-5'>Todas</h3>
            <div className='mt-5 p-5 bg-gray-300 dark:bg-gray-700 rounded-xl flex flex-wrap justify-center gap-6 lg:gap-10'>
                {
                    ALL_SKILS.map((sk,i) =>(
                        <img src={sk.preview} key={`all-${i}-${sk.name}`} className='w-11 h-11' />
                    ))
                }
            </div>
        </>
    )
}
