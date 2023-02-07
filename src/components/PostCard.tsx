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
        className="overflow-hidden flex flex-initial flex-wrap mb-6 md:mb-8 rounded-2xl bg-neutral-100 dark:bg-neutral-900 hover:shadow-2xl transition-shadow "
      >
        {post.thumbnail && (
          <div className="relative w-full md:w-1/2 overflow-hidden rounded-lg pb-[66%] lg:pb-[33%] bg-neutral-50 dark:bg-neutral-900 ">
            <Image
              src={post.thumbnail}
              className="object-cover"
              layout="fill"
              alt={post.title}
            />
          </div>
        )}
        <div className="relative w-full md:w-1/2 p-8">
        <div className="flex gap-2 mb-8 mt-2">
            {post.tags &&
              post.tags.map((tag: string, idx: number) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
          </div>
          <header className="flex flex-col justify-between md:flex-row md:items-baseline">
            <h2 className="text-3xl sm:text-3xl md:text-5xl xl:text-6xl   font-bold mb-2 cursor-pointer text-black dark:text-neutral-100">
              {post.title}
            </h2>
          </header>
          <div className="flex items-center gap-2 mb-4">
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
            <div className="text-lg text-gray-500 dark:text-gray-400 md:ml-0">
              {formatDate(
                post?.date?.start_date || post.createdTime,
                CONFIG.lang
              )}
            </div>
          </div>
          <main className="mb-4">
            <p className="font-bold text-2xl md:block leading-8 text-neutral-900 dark:text-neutral-100">
              {post.summary}
            </p>
          </main>

        </div>
      </article>

    </Link>)
  );
}

export default PostCard