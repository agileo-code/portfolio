import { useRouter } from 'next/router';
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
      <button
        type="button"
        className="bg-blue-700 text-white rounded-sm p-1 pr-3 pl-3 mt-2"
        onClick={() => onMenuClick(router, 'contact')}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ActionCallCard;
