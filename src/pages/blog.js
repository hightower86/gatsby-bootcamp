import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
              <h2>{title}</h2>
              <p>{date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
