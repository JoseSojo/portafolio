import { proyects } from "../mocks/mocks";
import { CardProject } from "./partials/CardProject";

export const SectionProjects = () => {
    return (
        <div className='bg-gray-900 rounded-md p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {
                proyects.map((item) => (
                    <CardProject key={`${item.url}-${item.title}`} previw={item.previw} tecnologies={item.tecnologies} title={item.title} url={item.url} />
                ))
            }
        </div>
    )
}