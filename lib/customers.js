import Dribo from '../public/images/customers/dribo.svg';
import Assegur from '../public/images/customers/assegur.svg';
import IamTech from '../public/images/customers/iamtech.svg';
import GFT from '../public/images/customers/GFT.svg';

const customers = [
  {
    name: 'IAM Technologies',
    url: 'https://www.iamtech.tech/',
    logo: <IamTech className="h-full" />
  },
  {
    name: 'Dribo',
    url: 'https://dribo.es/',
    logo: <Dribo className="h-full" />
  },
  {
    name: 'Assegur',
    url: 'https://www.assegur.com/',
    logo: <Assegur className="h-full" />
  },
  {
    name: 'WeeCover',
    url: 'https://weecover.com/',
    logo: <img src="/images/customers/weecover.png" className="h-full" />
  },
  {
    name: 'GFT',
    url: 'https://www.gft.com/',
    logo: <GFT className="h-full" />
  }
];

export default customers;
