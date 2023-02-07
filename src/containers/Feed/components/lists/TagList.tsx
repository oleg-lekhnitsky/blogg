import { TTags } from '@custeomTypes/index'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  className?: string
  data: TTags
}

const TagList: React.FC<Props> = ({ className, data }) => {
  const router = useRouter()
  const currentTag = router.query.tag || 'All'

  const handleClickTag = (value: any) => {
    router.push({
      query: {
        ...router.query,
        tag: value,
      },
    })
  }

  return (
    <div className={className}>
      <div className="hidden lg:block p-0 mb-4 dark:text-white"></div>
      <ul className="cursor-pointer gap-1 flex mobile-x-scroll lg:block mb-6">
        {Object.keys(data).map((key) => (
          <li
            key={key}
            className={`text-2xl font-bold p-2.5 px-4 my-1 flex-shrink-0 rounded-2xl text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
              key === currentTag &&
              'text-black underline dark: hover:bg-white dark:hover:bg-zinc-700'
            }`}
            onClick={() => handleClickTag(key)}
          >
            <a>{key}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagList
