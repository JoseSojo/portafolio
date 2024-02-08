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

export type PayloadSkils = 'ALL' | 'FAV' | 'FRONT' | 'BACK'; 

export interface SKILS_TYPE {
    preview: any,
    name: string,
}

export type LIST_SKILS = SKILS_TYPE[];

export const FAVORITE_SKILS: LIST_SKILS = [
    {
        preview: REACT,
        name: 'react'
    },
    {
        preview: TAILWIND,
        name: 'tailwind'
    },
    {
        preview: TYPESCRIPT,
        name: 'typescript'
    },
    {
        preview: EXPRESS,
        name: 'express'
    },
    {
        preview: MYSQL,
        name: 'mysql'
    }
]

export const ALL_SKILS: LIST_SKILS = [
    { preview:HTML, name:'html' },
    { preview:CSS, name:'css' },
    { preview:JS, name:'JavaScript' },
    { preview:NODE, name:'node' },
    { preview:NPM, name:'npm' },
    { preview:REACT, name:'react' },
    { preview:GIT, name:'git' },
    { preview:TAILWIND, name:'tailwind' },
    { preview:TYPESCRIPT, name:'TypeScript' },
    { preview:EXPRESS, name:'express' },
    { preview:MYSQL, name:'MySql' },
    { preview:MONGO, name:'MongoDB' }
]

export const FRONT_SKILS: SKILS_TYPE[] = [
    { preview:HTML, name:'html' },
    { preview:CSS, name:'css' },
    { preview:JS, name:'JavaScript' },
    { preview:NPM, name:'npm' },
    { preview:REACT, name:'react' },
    { preview:TAILWIND, name:'tailwind' },
    { preview:TYPESCRIPT, name:'TypeScript' }
];

export const BACK_SKILS: SKILS_TYPE[] = [
    { preview:JS, name:'JavaScript' },
    { preview:NODE, name:'node' },
    { preview:NPM, name:'npm' },
    { preview:TYPESCRIPT, name:'TypeScript' },
    { preview:EXPRESS, name:'express' },
    { preview:MYSQL, name:'MySql' },
    { preview:MONGO, name:'MongoDB' }
];
