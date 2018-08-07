import React from 'react'
import Layout from '../layouts/Main';
import { getPosts } from '../api/posts'
// import Link from 'next/link'

import Post from '../Components/Post/index.js'

const IndexPage = ({ posts }) => (
  <Layout>
    <ul>
      {posts.map(p => (
        <Post key={p.title} post={p} />
      ))}
    </ul>
  </Layout>
)

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}

export default IndexPage