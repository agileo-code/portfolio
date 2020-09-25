/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import styled from 'styled-components';
import Layout from '../../../components/layout';

export default function Post({ devDotToPost }) {
  const { title, published_at, social_image, body_html, user } = devDotToPost;
  const date = new Date(published_at);
  const formatedDate = `${date.getDate()}/${
    parseInt(date.getMonth(), 10) + 1
  }/${date.getFullYear()}`;

  return (
    <Layout>
      <div className="flex justify-center bg-black">
      <article className="text-xs p-2 pt-24 pb-20 w-full md:w-3/4 ">
        <div className="border-2 text-black bg-white rounded-lg overflow-hidden">
          <img className="w-full" src={social_image} alt={title} />
          <div className="p-4 md:p-32">
            <h1>{title}</h1>
            <div className="flex items-center text-gray-600">
              <img
                className="rounded-full w-12"
                src={user.profile_image_90}
                alt={user.name}
              />
              <span className="mx-4">{user.name}</span>
              <span className="text-sm">{formatedDate}</span>
            </div>
            <StyledMarkDown dangerouslySetInnerHTML={{ __html: body_html }} />
          </div>
        </div>
        <div className="my-4 p-4 border-2 border-gray-200 rounded-lg">
          <div className="text-gray-600 text-sm py-2">
            Published on {formatedDate} by:
          </div>
          <div className="flex items-center py-2">
            <img
              className="rounded-full w-16"
              src={user.profile_image_90}
              alt={user.name}
            />
            <span className="mx-4 text-corporative-blue">
              @{user.twitter_username}
            </span>
          </div>
        </div>
      </article>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const devDotToPost = await fetch(
    `https://dev.to/api/articles/nimbel/${params.slug}`
  );
  const res = await devDotToPost.json();

  return {
    props: {
      devDotToPost: res
    }
  };
};

export async function getStaticPaths() {
  const devDotToPosts = await fetch(
    `https://dev.to/api/articles?username=nimbel`
  );
  const posts = await devDotToPosts.json();

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}

const StyledMarkDown = styled.div`
  padding: 1rem 0;
  text-size-adjust: 100%;
  text-align: left;
  text-rendering: optimizeSpeed;
  font-size: 20px;
  
  h1,
  h2,
  h3 {
    margin-top: 2rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: disc;
    margin-left: 2rem;
    li {
      padding: 0.3rem 0;
    }
  }

  a {
    color: #007fa9;
    text-decoration: underline;
    cursor: pointer;
    img {
      margin: 0 auto;
    }
  }

  pre {
    background-color: black;
    color: white;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0.5rem;
  }

  .table-wrapper-paragraph {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    th {
      border: 1px solid rgba(0, 0, 0, 0.1);
      background-color: #eef0f1;
      padding: 0.4rem 1rem;
      text-align: center;
    }
    td {
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 0.4rem 1rem;
      text-align: center;
    }
  } 
`;
