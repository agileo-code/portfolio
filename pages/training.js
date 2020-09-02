import Layout from '../components/layout/layout';
import SectionLayout from '../components/sectionLayout';
import WhiteBoard from '../public/images/whiteboard.svg';
import IdeaPerson from '../public/images/ideaPerson.svg';

export default function Training() {
  return (
    <Layout>
      <SectionLayout className="bg-black text-white items-center pt-48">
        <h2>Training programs</h2>
      </SectionLayout>
      <SectionLayout className="bg-white text-black">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <IdeaPerson className="w-1/4 ml-64" />
          </div>
          <WhiteBoard />
        </div>
      </SectionLayout>
    </Layout>
  );
}
