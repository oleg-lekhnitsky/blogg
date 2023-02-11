import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const Footer: React.FC<Props> = () => {
  const router = useRouter()
  return (
    <div className="flex justify-between ">
      <a>
        <button
          onClick={() => router.push('/')}
          className=""
        >
          ← Back
        </button>
      </a>
      <a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className=""
        >
          ↑ Top
        </button>
      </a>
    </div>
  )
}

export default Footer
