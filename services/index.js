import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_API_ENDPOINT);

export async function getPostData(slug) {
  const QUERY = gql`
  {
    post(where: {slug: "${slug}"}) {
      title
      content {
       raw
     }
     featuredImage {
       url
     }   
     author {
       name
     }
     excerpt   
    }
  }
  `

  const data = await graphcms.request(QUERY)
  return data;
}


export async function getAllSlugs() {
  const QUERY = gql`
  {
    posts {
      slug
    }
  }
  `

  const slugs = await graphcms.request(QUERY);
  return slugs.posts.map(post => {
    return {
      params: {
        slug: post.slug
      }
    }
  });
}


export async function getPostCards() {
  const QUERY = gql`
    {
        posts {
            title
            excerpt
            createdAt
            slug
            featuredImage {
              url
            }
            author {
              name
            }
          }
    }    
    `

  const posts = await graphcms.request(QUERY);
  return posts;
}