import LINK from '../../assets/social/linkedin.png';
import GIH from '../../assets/social/github.png'

export const SocialMedia = () => {

    return (
        <>
            <a href='https://github.com/JoseSojo' target='_blank' className={`w-full duration-200 hover:text-purple-700 font-bold `}><img src={GIH} className='w-11 h-auto' /></a>
            <a href='https://www.linkedin.com/in/jose-sojo-jaimes-1a9ab7291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' className={`w-full duration-200 hover:text-purple-700 font-bold `}><img src={LINK} className='w-11 h-auto' /></a>
        
        </>
    )
}
