/* eslint-disable camelcase */
import { useContext } from 'react';

import BlogPost from '../components/BlogPost';
import Layout from '../components/layout';
import SectionLayout from '../components/sectionLayout';
import { LanguageContext } from '../context/language';

export default function Blog({ devDotToPosts }) {
  const { locale, localesObj } = useContext(LanguageContext);

  return (
    <Layout>
      <SectionLayout
        className="text-gray-700 bg-black body-font min-h-screen"
        style={{
          background: 'url("images/blog.webp"), url("images/blog.jp2")',
          backgroundSize: 'cover'
        }}
      >
        <div className="container px-5 py-10 mx-auto">
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {devDotToPosts.map(
              ({
                id,
                type_of,
                comments_count,
                published_at,
                description,
                title,
                tag_list,
                social_image,
                positive_reactions_count,
                slug
              }) => {
                return (
                  type_of === 'article' &&
                  tag_list.includes(localesObj[locale]) && (
                    <BlogPost
                      key={id}
                      id={id}
                      img={social_image}
                      createdAt={published_at}
                      title={title}
                      desc={description}
                      slug={slug}
                      likes={positive_reactions_count}
                      comments={comments_count}
                    />
                  )
                );
              }
            )}
          </div>
        </div>
      </SectionLayout>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const devDotToPosts = await fetch(
    'https://dev.to/api/articles?username=nimbel'
  );
  const res = await devDotToPosts.json();

  return {
    props: {
      devDotToPosts: res
    }
  };
};
