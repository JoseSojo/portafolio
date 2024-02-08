import { Works } from "../../definitions/proyects.d";
import { CardProject } from "../partials/CardProject";

export const SectionWorks = () => {
    return (
        <div className='grid grid-cols-1 gap-5'>
            {
                Works.map((w) => (
                    <CardProject 
                        description={w.description}
                        preview={w.preview}
                        tecnologies={w.skils}
                        title={w.titulo}
                        url={w.url}
                        role={w.role}
                        />
                ))
            }
        </div>
    )
}