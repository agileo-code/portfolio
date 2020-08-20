import Dribo from '../public/images/customers/dribo.svg';
import Assegur from '../public/images/customers/assegur.svg';
import IamTech from '../public/images/customers/iamtech.svg';
import GFT from '../public/images/customers/GFT.svg';
import WeeCover from '../public/images/customers/weecover.svg';

const customers = [
  {
    name: 'IAM Technologies',
    url: 'https://www.iamtech.tech/',
    logo: <IamTech />
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
    logo: <WeeCover className="w-5/6" />
  },
  {
    name: 'GFT',
    url: 'https://www.gft.com/',
    logo: <GFT />
  }
];

export default customers;
