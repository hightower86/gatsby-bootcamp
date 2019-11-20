import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const edges = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `).allMarkdownRemark.edges
  console.log(edges)
  return (
    <Layout>
      <h1>Blog Page</h1>
      <ol>
        {edges.map(edge => {
          const { title, date } = edge.node.frontmatter
          return (
            <li>
              <hr />
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{title}</h2>
                <p>{date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
