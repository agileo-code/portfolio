import Dribo from '../public/images/customers/dribo.svg';
import Assegur from '../public/images/customers/assegur.svg';
import IamTech from '../public/images/customers/iamtech.svg';
import WeeCover from '../public/images/customers/weecover.svg';

const customers = [
  {
    name: 'IAM Technologies',
    url: 'https://www.iamtech.tech/',
    logo: <IamTech />
  },
  {
    name: 'Teradisk',
    url: 'https://teradisk.com/',
    logo: (
      <div className="max-w-none w-32">
        <img src="/images/customers/teradisk.png" alt="Teradisk" />
      </div>
    )
  },
  {
    name: 'Dribo',
    url: 'https://dribo.es/',
    logo: <Dribo />
  },
  {
    name: 'Assegur',
    url: 'https://www.assegur.com/',
    logo: <Assegur />
  },
  {
    name: 'WeeCover',
    url: 'https://weecover.com/',
    logo: <WeeCover />
  }
];

export default customers;
