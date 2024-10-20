import { useContext } from 'react';
import { LangContext } from '../../i18n-nimbel';

const team = [
  {
    name: 'Rubén Sahagún Benítez',
    image:
      'https://media.licdn.com/dms/image/v2/C4D03AQFZ4MK8jKX3DA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1605284747273?e=1734566400&v=beta&t=xMg7ETyB_k-qxSkgZuzO92a8cxDAlpQpzJGYYFrwqvQ',
    role: 'Manager and Technical director'
  },
  {
    name: 'Albert Suñé Belmonte',
    image:
      'https://media.licdn.com/dms/image/v2/D4D03AQEb7K6V7m7g3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708269969312?e=1734566400&v=beta&t=usFF_kIRrf9Qg_9vXqy5v-wpOgM_r_KNOO3ExfL9Ysc',
    role: 'Full Stack Software Developer'
  }
];

export default function AboutUs() {
  const { t } = useContext(LangContext);

  return (
    <section className="text-gray-700 bg-gray-100 body-font" id="about">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col">
          <div className="text-center mb-20">
            <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              {t('[About us]')}
            </h2>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          {team.map(member => (
            <div className="card bg-base-200 w-full md:w-96 shadow-xl">
              <figure>
                <img src={member.image} alt={member.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{member.name}</h2>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
