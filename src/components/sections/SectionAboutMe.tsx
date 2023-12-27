
interface Props {}

export const SectionAboutMe: React.FC<Props> = ({}) => {
    
    return (
        <>
            <p className='w-full mx-auto p-5 bg-gray-100 text-gray-950 rounded-xl text-lg font-semi-bold'>
                ¡Hola!, mi nombre es José Sojo tengo 21 años y actualmente soy estudiante de ing. informática
            </p>
            <p className='w-full mx-auto p-5 bg-gray-100 text-gray-950 rounded-xl text-lg font-semi-bold'>
                Me considero estudiante autodidacta
            </p>
            <p className='w-full mx-auto p-5 bg-gray-100 text-gray-950 rounded-xl text-lg font-semi-bold'>
                Preparado para poner mis conocimientos a prueba,
                y de igual forma adquirir nuevos conocimientos 
            </p>
        </>
    )
}
