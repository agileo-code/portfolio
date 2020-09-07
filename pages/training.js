import Layout from '../components/layout/layout';
import SectionLayout from '../components/sectionLayout';
import WhiteBoard from '../public/images/whiteboard.svg';
import IdeaPerson from '../public/images/ideaPerson.svg';

export default function Training() {
  return (
    <Layout>
      <SectionLayout className="bg-black text-white items-center pt-24">
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-2">
            <h2 className="self-center">Training programs</h2>
            <IdeaPerson className="w-1/4 self-start" />
          </div>
          <WhiteBoard />
        </div>
      </SectionLayout>
    </Layout>
  );
}
