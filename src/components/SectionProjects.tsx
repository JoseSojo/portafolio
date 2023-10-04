import { proyects } from "../mocks/mocks";
import { CardId } from "./CardID";

interface SectionProjectsProps {
    sec: string
}

export const SectionProjects: React.FC<SectionProjectsProps> = ({sec}) => {
    return (
        
          <div className='grid w-[100%] pb-10'>
            <div className='rounded-lg'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full'>
                {
                    proyects.map((p) => (
                        <CardId titleId={sec}>
                            <div className='rounded-lg'>
                                <img src={p.previw} className='w-full h-64 object-cover rounded-lg' />
                                <h1 className='absolute text-2xl font-bold -translate-y-14 py-3 px-4 md:px-10 text-center bg-black bg-opacity-70 rounded-bl-lg'>{p.title}</h1>
                                <p className='py-2 px-3 md:px-7 text-md text-gray-500 font-medium text-center'>{p.description}</p>
                                <div className='grid grid-cols-3 justify-center py-3'>
                                    {
                                        p.details.map((detail, i) => (
                                            <span className='text-md text-gray-300' key={i}>{detail}</span>
                                        ))
                                    }
                                </div>
                                <div className='flex gap-x-5 justify-center py-3 bg-black bg-opacity-70 rounded-lg'>
                                    {
                                        p.skils.map((skil, i) => (
                                            <img key={i} src={skil} className='w-6 h-6' />
                                        ))
                                    }
                                </div>
                                <a href={p.url} target="LAN" className='flex gap-x-5 justify-center py-3 bg-gray-950 hover:bg-black mt-3 rounded-lg'>
                                    Visitar
                                </a>
                            </div>
                        </CardId>
                    ))
                }
              </div>
            </div>
          </div>
    )
}