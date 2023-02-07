import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const handleClick = (value: string) => {
    router.push(`/?tag=${value}`)
  }
  return (
    <div
      onClick={() => handleClick(children)}
      className="text-lr text-neutral-900 font-bold rounded-full bg-[#EBC814] px-2 py-1 cursor-pointer"
    >
      {children}
    </div>
  )
}

export default Tag
