import { useApp } from '../context/AppContext';
import { SectionSkils } from './sections/SectionSkils';
import { SectionAboutMe } from './sections/SectionAboutMe';
import { SectionProjects } from './sections/SectionProjects';
import { SectionContact } from './sections/SectionContact';


export const Body = () => {

    const app = useApp();

    return (
        <>
            { app.payload === 'ABOUT' && <SectionAboutMe /> }
            { app.payload === 'PROJECTS' && <SectionProjects /> }
            { app.payload === 'SKILS' && <SectionSkils /> }
            { app.payload === 'CONTACT' && <SectionContact /> }
        </>
    )
}