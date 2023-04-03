import React from "react";
import { InlineSuggest } from "react-inline-suggest";
import { toast } from "react-toastify";

export const Command = () => {

  const [commandValue, setCommandValue] = React.useState("")

  const handleCommand = (e: React.FormEvent<HTMLInputElement>) => {
    setCommandValue(e.currentTarget.value)
  }

  const handleMatch = (e: any) => {
    toast.success(`Command executed: ${JSON.stringify(e)}`)
    setCommandValue("")
  }

  const haystack = ["about()", "projects()", "contactMe()", "getCV()"]

  const tools = [
    {
        "label": "JS",
        "color": "text-function"
    },
    {
        "label": "TS",
        "color": "text-variable"
    },
    {
        "label": "Tailwind",
        "color": "text-tailwind"
    },
    {
        "label": "ReactJS",
        "color": "text-react"
    },
    {
        "label": "VueJS",
        "color": "text-vue"
    },
    {
        "label": "Spaces: 2",
        "color": "text-placeholder"
    },
    {
        "label": "+",
        "color": "text-placeholder"
    }
  ]

  return <div className="fixed z-10 bottom-0 left-0 w-screen bg-black py-2 px-5">
    <div className="relative flex gap-2 w-full items-center text-xl">
      <span>$</span>
      <InlineSuggest haystack={haystack} value={commandValue} onChange={handleCommand} onMatch={handleMatch} placeholder={`run command: ${haystack.join(", ")}`} className="relative flex-grow bg-transparent text-function outline-none"  />
      <div className="flex gap-5 font-bold text-xs pointer-events-none">
        {tools.map(tool => <span className={tool.color}>
          {tool.label}
        </span>)}
      </div>
    </div>
  </div>
}