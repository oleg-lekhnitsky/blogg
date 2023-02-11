import Link from "next/link"
import CONFIG from "site.config"
import { formatDate } from "@/src/libs/utils"
import Tag from "./Tag"
import { TPost } from "../types"
import Image from "next/image"

type Props = {
  post: TPost
}

const PostCard: React.FC<Props> = ({ post }) => {
  if (post.thumbnail) {
  }
  return (
    (<Link href={`/${post.slug}`}>

      <article
        key={post.id}
        className="post_card"
      >
        {post.thumbnail && (
          <div className="post_card_cover_wrapper">
            <Image
              src={post.thumbnail}
              className="post_cover"
              layout="fill"
              alt={post.title}
            />
          </div>
        )}
        <div className="post_text_wrapper">
          <header className="flex flex-col justify-between md:flex-row md:items-baseline">
            <h2 className="post_heading">
              {post.title}
            </h2>
          </header>
          <div className="post-card-date">
            {/* {post.author && post.author[0] && (
              <>
                <div className="flex items-center gap-1">
                  <Image
                    className="rounded-full"
                    src={post.author[0].profile_photo}
                    alt="profile_photo"
                    loader={imageLoader}
                    width={20}
                    height={20}
                  />
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {`${post.author[0].last_name}${post.author[0].first_name}`}
                  </div>
                </div>
                <div className="self-stretch w-px my-1 bg-gray-300"></div>
              </>
            )} */}
            <div className="post-card-date">
              {formatDate(
                post?.date?.start_date || post.createdTime,
                CONFIG.lang
              )}
            </div>
          </div>
          <main className="card_summary">
            <p className="card_summary">
              {post.summary}
            </p>
          </main>

        </div>
        <div className="post_tags_wrapper">
            {post.tags &&
              post.tags.map((tag: string, idx: number) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
          </div>
      </article>

    </Link>)
  );
}

export default PostCard