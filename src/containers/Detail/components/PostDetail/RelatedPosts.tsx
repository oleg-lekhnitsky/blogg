import { TTags, TPosts } from '@/src/types'
import Link from 'next/link'

type Props = {
  posts: TPosts
  currentPostId: string
  title: string
}

const RelatedPosts: React.FC<Props> = ({ posts, currentPostId }) => {
  const relatedPosts = posts ? posts.filter((post) => post.id !== currentPostId) : []

  return (
    <div className="related-posts">
      <h3>Related Posts</h3>
      {relatedPosts.slice(0, 3).map((post) => (
        <div key={post.id}>
          <Link href={`/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}


export default RelatedPosts
