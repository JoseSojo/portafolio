import TS from '../assets/ts.svg';
import JS from '../assets/js.png';
import Tailwind from '../assets/tailwind.png';
import PYTHON from '../assets/python.png';
import REACT from '../assets/react.svg';
import MONGO from '../assets/mongo.png';
import MYSQL from '../assets/mysql.png';
import NODE from '../assets/node.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import EXPRESS from '../assets/express.png';
import NPM from '../assets/npm.png';
import DJANGO from '../assets/django.png';

import PREWVIEW_FINANZAS from '../assets/preview_finanzas.png';
import PREWVIEW_CRUD from '../assets/preview_task.png';
import PREWVIEW_DEXTER2 from '../assets/preview_dexter2.jpg';

export const skils = [
  HTML,
  CSS,
  JS,
  TS,
  NODE,
  NPM,
  REACT,
  Tailwind,
  EXPRESS,
  MYSQL,
  MONGO,
  PYTHON,
  DJANGO
]

export const proyects = [
  {
    previw:PREWVIEW_CRUD,
    title:'CRUD',
    tecnologies:[REACT,TS,Tailwind],
    url:'https://react-crud-seven-lake.vercel.app/'
  },
  {
    previw:PREWVIEW_FINANZAS,
    title:'App Finanzas',
    tecnologies:[REACT,TS,Tailwind],
    url:'https://finanzas-app-sigma.vercel.app/'
  },
  {
    preview:PREWVIEW_DEXTER2,
    title:'POKEDEX',
    tecnologies:[REACT,TS,Tailwind],
    url:'https://dexter-theta.vercel.app'
  }
]