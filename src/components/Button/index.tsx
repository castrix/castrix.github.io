import React from 'react'

interface Props {
  color: 'blue' | 'yellow' | 'green'
  children: React.ReactNode
  onClick?: () => void
}

export const IFButton: React.FC<Props> = (props) => {
  const colors = {
    blue: 'bg-none hover:bg-blue-500 border-white hover:border-blue-700',
    yellow: 'bg-none hover:bg-yellow-500 border-white hover:border-yellow-700',
    green: 'bg-none hover:bg-green-500 border-white hover:border-green-700',
  }
  return (
    <button
      onClick={props.onClick}
      className={`pointer-events-auto min-w-[128px] text-center outline-none text-white font-bold py-2 px-4 border border-b-4 rounded transition-all focus:border-0 ${
        colors[props.color]
      }`}
    >
      {props.children}
    </button>
  )
}
