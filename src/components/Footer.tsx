import { SocialMedia } from "./partials/SocialMedia"

export const Footer = () => {

    return (
        <>
            <section className='p-5 font-mono text-lg'>
                Programador Junior Javascript
            </section>

            <section className='p-5'>
                <ul className='flex justify-around items-center text-3xl gap-x-10'>
                    <SocialMedia />
                </ul>
            </section>
        </>
    )
}
