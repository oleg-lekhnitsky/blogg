import { TPost } from "@/src/types"
import CONFIG from "site.config"
import dynamic from "next/dynamic"

import RelatedPosts from './RelatedPosts'

type Props = {
  post: TPost
  posts: TPosts
}

const Post: React.FC<Props> = ({ post, posts }) => {
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <div className="content">{post.content}</div>
      <RelatedPosts posts={posts} currentPostId={post.id} />
    </div>
  )
}

export default Post
