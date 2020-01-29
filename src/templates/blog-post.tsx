import React, { useEffect, useState } from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }: any) => {
  const [origin, setOrigin] = useState<string>()
  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post?.frontmatter.title}</h1>

        {post?.frontmatter.audio && origin !== undefined && (
          <p>
            <audio
              src={`${process.env.GATSBY_STREAM_PROXY_PATH ||
                'http://stream-proxy-server.herokuapp.com/proxy?url='}${origin}${encodeURI(
                post?.frontmatter.audio
              )}`}
              controls
            />
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
