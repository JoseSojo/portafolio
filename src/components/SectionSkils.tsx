import React from "react";
import { CardId } from "./CardID";
import { Fade } from "react-awesome-reveal";
import { skils } from "../mocks/mocks";

interface SectionSkilsProps {
    sec: string
}

export const SectionSkils: React.FC<SectionSkilsProps> = ({sec}) => {

    return (
      <CardId titleId={sec}>
        <div className='grid'>
          <div className='rounded-lg'>
            <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-5'>

              <Fade cascade damping={0.4}>
                {
                  skils.map((s,i) => (
                    <img src={s} key={i} className='m-auto w-9 h-9 hover:scale-150 transition-transform' />
                  ))
                }
              </Fade>
            </div>
          </div>
        </div>
      </CardId>
    )
  }