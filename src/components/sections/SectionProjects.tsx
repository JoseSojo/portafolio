import { proyects } from "../../mocks/mocks";
import { CardProject } from "../partials/CardProject";

export const SectionProjects = () => {
    return (
        <div className='bg-gray-400 rounded-xl p-4 grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {
                proyects.map((item) => (
                <CardProject key={`${item.url}-${item.title}`} preview={item.previw} tecnologies={item.tecnologies} title={item.title} url={item.url} />
                ))
            }
        </div>
    )
}