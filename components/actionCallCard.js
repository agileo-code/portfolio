import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/core';

import { onMenuClick } from './layout/header';

const ActionCallCard = ({ className, title, price, children, buttonText }) => {
  const router = useRouter();
  return (
    <div
      className={`${className} bg-white text-gray-900 shadow-2xl rounded-lg p-4 flex flex-col justify-between items-center`}
    >
      <h3 className="mb-3">{title}</h3>
      {children}
      <div className="m-3">{price}</div>
      <Button
        type="button"
        variantColor="blue"
        onClick={() => onMenuClick(router, 'contact')}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ActionCallCard;
