import LINK from '../../assets/social/linkedin.png';
import GIH from '../../assets/social/github.png'

export const SocialMedia = () => {

    return (
        <>
            <a href='github.com' target='_blank' className={`w-full duration-200 hover:text-purple-700 font-bold `}><img src={GIH} className='w-11 h-auto' /></a>
            <a href='linkedint.com' target='_blank' className={`w-full duration-200 hover:text-purple-700 font-bold `}><img src={LINK} className='w-11 h-auto' /></a>
        </>
    )
}
