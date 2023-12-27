import TS from '../assets/ts.svg';
import JS from '../assets/js.png';
import Tailwind from '../assets/tailwind.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import REACT from '../assets/react.svg';
import NODE from '../assets/node.png';
import NPM from '../assets/npm.png';
import { CardSkil } from './partials/CardSkill';

export const SectionSkils = () => {

    return (
      <section className='w-full flex justify-center items-center flex-col md:pr-10'>
        <div className='bg-gray-900 p-5 w-full rounded-md mt-4 gap-x-3 gap-y-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <CardSkil ico={HTML} skil='HTML' />
          <CardSkil ico={CSS} skil='CSS' />
          <CardSkil ico={JS} skil='JavaScript' />
          <CardSkil ico={NODE} skil='Node js' />
          <CardSkil ico={NPM} skil='NPM' />
          <CardSkil ico={REACT} skil='React' />
          <CardSkil ico={Tailwind} skil='Tailwind css' />
          <CardSkil ico={TS} skil='TypeScript' />
        </div>
      </section>
    )
  }