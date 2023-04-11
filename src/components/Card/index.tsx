import React from 'react'
import { Hyperlinks } from '../../constants'
import noImage from '@assets/no-image.svg'

interface Props {
  title: string
  subTitle: string
  image: string
  description: string
  hyperlinks?: Hyperlinks
}

export const Card: React.FC<Props> = (props) => {
  return (
    <div className="card p-6 rounded-lg border border-white border-b-4 text-white flex flex-col min-h-[530px] gap-3">
      <div className="w-full max-h-72 overflow-hidden rounded-md">
        <img
          src={props.image || noImage}
          alt={props.title}
          className={`w-full hover:scale-110 transition-all ${!props.image && 'translate-y-[-100px]'}`}
        />
      </div>
      <p className="font-medium text-lg">{props.title}</p>
      <p className="font-medium text-gray-400">{props.subTitle}</p>
      <p className="text-justify">{props.description}</p>
    </div>
  )
}
