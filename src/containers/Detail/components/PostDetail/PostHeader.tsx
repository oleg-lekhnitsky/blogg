import CONFIG from "@/site.config"
import Tag from "@components/Tag"
import { TPost } from "@/src/types"
import { formatDate } from "@/src/libs/utils"
import Image from "next/image"
import React from "react"

type Props = {
  data: TPost
}

const PostHeader: React.FC<Props> = ({ data }) => {
  return (
    <>

      {data.type[0] !== "Paper" && (
        <nav className="mt-6 ">
          <div className="post-details-wrapper">
            {data.author && data.author[0] && data.author[0].name && (
              <>
                <div className="author-image-wrapper">
                  <Image
                    className="author-image"
                    src={data.author[0].profile_photo || CONFIG.profile.image}
                    alt="profile_photo"
                    width={50}
                    height={50}
                  />
                  
                </div>
                
              
              </>
            )}
            <div className="post-date">
              {formatDate(
                data?.date?.start_date || data.createdTime,
                CONFIG.lang
              )}
            </div>
          </div>
          <h1 className="post-heading">
            {data.title}
          </h1>
          <div className="tags_list">
            {data.tags && (
              <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags gap-2">
                {data.tags.map((tag: string) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
          </div>
          {data.thumbnail && (
            <div className="post-header">
              <Image
                src={data.thumbnail}
                className="object-cover"
                layout="fill"
                alt={data.title}
              />
            </div>
          )}
        </nav>
      )}
    </>
  )
}

export default PostHeader
