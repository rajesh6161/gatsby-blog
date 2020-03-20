import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import postStyle from "./posts.module.scss"
const BlogPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  //console.log(data)
  return (
    <div>
      <Head title="Posts" />
      <Layout>
        <h1>Blog Posts</h1>
        <ol className={postStyle.posts}>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li className={postStyle.post}>
                <Link to={`posts/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}
export default BlogPost
