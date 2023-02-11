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
      
      <ul className="tags-list">
        {Object.keys(data).map((key) => (
          <li
            key={key}
            className={`tags_list ${
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
