import PostCard from '@components/PostCard'
import { TPosts, TTags } from '@/src/types'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

type Props = {
  q: string
  tags: TTags
  posts: TPosts
}

const PostList: React.FC<Props> = ({ q, posts, tags }) => {
  const router = useRouter()
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [currentPostIndex, setCurrentPostIndex] = useState(0)

  const currentTag = `${router.query.tag || ``}` || 'All'
  const currentOrder = `${router.query.order || ``}` || 'desc'

  useEffect(() => {
    setFilteredPosts(() => {
      let filteredPosts = posts
      // keyword
      filteredPosts = filteredPosts.filter((post) => {
        const tagContent = post.tags ? post.tags.join(' ') : ''
        const searchContent = post.title + post.summary + tagContent
        return searchContent.toLowerCase().includes(q.toLowerCase())
      })

      // tag
      if (currentTag !== 'All') {
        filteredPosts = filteredPosts.filter(
          (post) => post && post.tags && post.tags.includes(currentTag)
        )
      }
      // order
      if (currentOrder !== 'desc') {
        filteredPosts = filteredPosts.reverse()
      }

      return filteredPosts
    })
  }, [q, currentTag, currentOrder])

  const handlePostCardClick = (postId: string) => {
    const postIndex = filteredPosts.findIndex(post => post.id === postId)
    setCurrentPostIndex(postIndex)
  }

  const handleNextPostClick = () => {
    const nextPostIndex = currentPostIndex + 1
    if (nextPostIndex < filteredPosts.length) {
      router.push(`${filteredPosts[nextPostIndex].slug}`)
      setCurrentPostIndex(nextPostIndex)
    }
  }

  return (
    <>
      <div className="posts-main">
        {!filteredPosts.length && (
          <p className="search-answer">Nothing. Try something different</p>
        )}
        {filteredPosts.slice(0, 20).map((post) => (
          <PostCard key={post.id} post={post} onClick={() => handlePostCardClick(post.id)} />
        ))}
        {currentPostIndex < filteredPosts.length - 1 && (
          <button onClick={handleNextPostClick}>Next Post</button>
        )}
      </div>
    </>
  )
}

export default PostList
