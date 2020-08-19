import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <div className="flex items-center bg-gray-900 h-screen relative p-10">
        <div>
          <h1 className="text-white">RUSHMORE CODE</h1>
          <h2 className="text-white">
            The future is here, come in and pay for it.
          </h2>
          <h2 className="text-white">Show me the money.</h2>
        </div>
      </div>
      <div className="h-screen">Next.js Boilerplate</div>
    </Layout>
  );
}
