import Layout from '../components/layout';
import MainSlide from '../components/mainSlide';

export default function Home() {
  return (
    <Layout>
      <MainSlide />
      <div className="h-screen">Next.js Boilerplate</div>
    </Layout>
  );
}
