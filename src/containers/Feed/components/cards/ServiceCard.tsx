import CONFIG from "site.config"
import React from "react"
import { AiFillCodeSandboxCircle } from "react-icons/ai"

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
    <div className="hidden text-2xl">
      <div className="hidden p-1 mb-3 dark:text-white">Links</div>
      <ul className="rounded-2xl mb-9 bg-white dark:bg-zinc-700 p-1 flex flex-col">
        <a
          href={`${CONFIG.projects[0].href}`}
          rel="noreferrer"
          target="_blank"
          className="p-3 hover:bg-gray-400 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
        >
          <AiFillCodeSandboxCircle className="text-2xl" />
          <div className="text-2xl">{CONFIG.projects[0].name}</div>
        </a>
      </ul>
    </div>
    </>
  )
}

export default ServiceCard
