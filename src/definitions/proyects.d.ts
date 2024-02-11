import HTML from '../assets/logos/html.png';
import CSS from '../assets/logos/css.png';
import JS from '../assets/logos/js.png';
import NODE from '../assets/logos/node.png';
import NPM from '../assets/logos/npm.png';
import REACT from '../assets/logos/react.svg';
import TAILWIND from '../assets/logos/tailwind.png';
import TYPESCRIPT from '../assets/logos/ts.svg';
import EXPRESS from '../assets/logos/express.png';
import MONGO from '../assets/logos/mongo.png';
import MYSQL from '../assets/logos/mysql.png';
import GIT from '../assets/logos/git.png';

import ALCALDIA1 from '../assets/previws/alcaldia_1.png';
import JGR1 from '../assets/previws/jgr_1.jpg';

interface Proyects {
    preview?: string | null,
    titulo: string,
    description: string,
    role: string,
    skils?: string[],
    url: string | null
}

export const Works: Proyects[] = [
    {
        id:'1',
        titulo: 'Sistema de muebles, inmuebles y vehículos',
        role: 'Unico Desarrollador',
        url: null
    },
    {
        id:'2',
        preview: JGR1,
        titulo: 'Sistema de carga de archivos públicos y privados',
        role: 'Unico Desarrollador',
        skils: [REACT,TAILWIND,TYPESCRIPT,EXPRESS,JS,MYSQL],
        url: 'https://file-pucli-private-ryr2.vercel.app/'
    }
]

export const ProyectsList: Proyects[] = []
