import TS from '../../assets/ts.svg';
import JS from '../../assets/js.png';
import Tailwind from '../../assets/tailwind.png';
import REACT from '../../assets/react.svg';
import MONGO from '../../assets/mongo.png';
import MYSQL from '../../assets/mysql.png';
import NODE from '../../assets/node.png';
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import EXPRESS from '../../assets/express.png';
import NPM from '../../assets/npm.png';
import { RoadMap } from '../partials/RoadMap';

interface Props {}

const ListFronent = [
    {ico:TS,skil:'TypeScript'},
    {ico:JS,skil:'JavaScript'},
    {ico:Tailwind,skil:'Tailwindcss'},
    {ico:CSS,skil:'CSS'},
    {ico:HTML,skil:'HTML'},
    {ico:REACT,skil:'React'},
];
const ListBackend = [
    {ico:NODE,skil:'Nodejs'},
    {ico:EXPRESS,skil:'Express js'},
    {ico:MYSQL,skil:'MySql'},
    {ico:MONGO,skil:'Mongodb'},
    {ico:NPM,skil:'NPM'}
];

export const SectionSkilsMe: React.FC<Props> = ({}) => {
    
    return (
        <section className='bg-gray-400 rounded-xl p-4'>
            <RoadMap title='Herramientas Fronent' list={ListFronent} />
            <RoadMap title='Herramientas Backend' list={ListBackend} />
        </section>
    )
}
