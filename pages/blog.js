/* eslint-disable camelcase */
import BlogPost from '../components/BlogPost';
import Layout from '../components/layout';
import SectionLayout from '../components/sectionLayout';

export default function Blog({ devDotToPosts }) {
  return (
    <Layout>
      <SectionLayout className="text-gray-700 body-font">
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
                social_image,
                positive_reactions_count,
                slug
              }) => {
                return (
                  type_of === 'article' && (
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
    'https://dev.to/api/articles?username=dastasoft'
  );
  const res = await devDotToPosts.json();

  return {
    props: {
      devDotToPosts: res
    }
  };
};
