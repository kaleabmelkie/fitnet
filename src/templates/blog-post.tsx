import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }: any) => {
  console.log(data)
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post?.frontmatter.title}</h1>

        {post?.frontmatter.audio && (
          <p>
            <audio src={post?.frontmatter.audio} controls />
          </p>
        )}

        <div dangerouslySetInnerHTML={{ __html: post?.html }} />
      </div>

      <hr />
      <Link to="/">Go back to page-2</Link>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        audio
      }
    }
  }
`
