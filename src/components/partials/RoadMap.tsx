import React from "react"
import { CardSkil } from "./CardSkill"

type Item = {ico:any, skil:string}[]

interface Props {
    title: string,
    list: Item
}

export const RoadMap: React.FC<Props> = ({ list, title }) => {

    return (
        <>
            <h2 className='font-bold text-center text-gray-950 font-mono text-xl mt-8'>{title}</h2>
            <aside className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-[90%] lg:w-[60%] mx-auto rounded-xl bg-gray-100'>
                {
                    list.map(item => ( <CardSkil ico={item.ico} skil={item.skil} /> ))
                }
            </aside>
        </>
    )
}
