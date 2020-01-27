import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { NewsListQuery } from '../../graphql-types'

const SecondPage = () => {
  const data = useStaticQuery<NewsListQuery>(query)

  return (
    <Layout>
      <SEO title="Page two" />

      <div>
        <h1 style={{ display: `inline-block`, borderBottom: `1px solid` }}>
          Blog
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link
            to={node.fields?.slug || ``}
            key={node.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <h3 style={{ marginBottom: 1 / 4 }}>
              {node.frontmatter?.title}{' '}
              <span style={{ color: `#bbb` }}> — {node.frontmatter?.date}</span>
            </h3>
            <p>{node.frontmatter?.excerpt}</p>
          </Link>
        ))}
      </div>

      <hr />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
  query NewsList {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
