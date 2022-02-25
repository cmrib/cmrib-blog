import React from 'react'
import styles from '../styles/PostCard.module.scss'
import Link from 'next/link'

const PostCard = ({ post }) => {

  return (
    <div className={styles.post}>
      <Link href={'/posts/' + post.slug}>
        <div>
          <h1>
            {post.title}
          </h1>
          <p>
            {post.excerpt}
          </p>

          <p>
            {post.author.name}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default PostCard