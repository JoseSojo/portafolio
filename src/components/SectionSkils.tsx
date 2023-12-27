import TS from '../assets/ts.svg';
import Tailwind from '../assets/tailwind.png';
import REACT from '../assets/react.svg';
import { CardSkil } from './partials/CardSkill';

export const SectionSkils = () => {

    return (
      <section className='w-full flex justify-center items-center flex-col md:pr-10'>
        <h2 className='first-letter:text-cyan-400 font-bold text-2xl'>Mis tecnologías favoritas</h2>
        <div className='bg-gray-400 p-5 w-full rounded-md mt-3 gap-y-8 flex justify-center gap-x-5'>
          <CardSkil ico={REACT} skil='React' />
          <CardSkil ico={Tailwind} skil='Tailwind css' />
          <CardSkil ico={TS} skil='TypeScript' />
        </div>
      </section>
    )
  }