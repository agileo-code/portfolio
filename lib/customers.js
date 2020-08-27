import Dribo from '../public/images/customers/dribo.svg';
import Assegur from '../public/images/customers/assegur.svg';
import IamTech from '../public/images/customers/iamtech.svg';
import GFT from '../public/images/customers/GFT.svg';
import WeeCover from '../public/images/customers/weecover.svg';

const customers = [
  {
    name: 'IAM Technologies',
    url: 'https://www.iamtech.tech/',
    logo: <IamTech className="transition duration-500" />
  },
  {
    name: 'Dribo',
    url: 'https://dribo.es/',
    logo: <Dribo className="transition duration-500" />
  },
  {
    name: 'Assegur',
    url: 'https://www.assegur.com/',
    logo: <Assegur className="transition duration-500" />
  },
  {
    name: 'WeeCover',
    url: 'https://weecover.com/',
    logo: <WeeCover className="transition duration-500" />
  },
  {
    name: 'GFT',
    url: 'https://www.gft.com/',
    logo: <GFT className="transition duration-500" />
  }
];

export default customers;
