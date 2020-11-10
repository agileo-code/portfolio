/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import styled from 'styled-components';
import Head from 'next/head';

import Layout from '../../../components/layout';

export default function Post({ devDotToPost }) {
  const {
    title,
    published_at,
    social_image,
    body_html,
    user,
    type_of,
    description,
    canonical_url
  } = devDotToPost;
  const date = new Date(published_at);
  const formatedDate = `${date.getDate()}/${
    parseInt(date.getMonth(), 10) + 1
  }/${date.getFullYear()}`;

  return (
    <Layout>
      <Head>
        <meta property="og:type" content={type_of} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={social_image} />
        <meta property="og:url" content={canonical_url} />
        <meta property="og:site_name" content="Nimbel" />
      </Head>
      <div
        className="flex justify-center bg-black"
        style={{
          background: 'url("/images/post.webp"), url("/images/post.jp2")',
          backgroundSize: 'contain'
        }}
      >
        <article className="text-xs md:pt-24 md:pb-20 w-full md:w-3/4 ">
          <div className="border-2 text-black bg-white md:rounded-lg overflow-hidden">
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
  text-align: left;
  text-rendering: optimizeSpeed;
  font-size: 1rem;

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
    width: 100%;
    font-size: 1em;
    display: flex;
    justify-content: center;
    overflow-x: auto;
    table {
      margin: 0.8em auto 1.2em;
      table-layout: fixed;
    }
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

  .highlight {
    overflow-x: auto;
  }

  .highlight__panel {
    display: none;
  }

  @media (max-width: 1000px) {
    .table-wrapper-paragraph {
      table {
        display: flex;
      }
      tr {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
