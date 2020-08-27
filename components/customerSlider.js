import { useState, useEffect, useRef } from 'react';
import customers from '../lib/customers';

const CustomerSlider = ({ className }) => {
  const [showCustomers, setShowCustomers] = useState([]);
  const containerEl = useRef(null);

  let group = 0;
  const updateCustomersToShow = () => {
    const itemsByGroup = Math.floor(containerEl.current.clientWidth / 120);
    const totalGroups = Math.ceil(customers.length / itemsByGroup);
    setShowCustomers(
      customers.slice(
        (group % totalGroups) * itemsByGroup,
        (group % totalGroups) * itemsByGroup + itemsByGroup
      )
    );
    group += 1;
  };

  useEffect(() => {
    updateCustomersToShow();
    const timer = setInterval(() => {
      updateCustomersToShow();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex items-center text-gray-500 flex-col ${className}`}>
      <span>Who trust in us</span>
      <div className="flex justify-center text-corporative-slideLight p-10 bg-gray-400 rounded-sm h-20 w-full">
        <div
          ref={containerEl}
          className="flex justify-around items-center w-full"
        >
          {showCustomers.map(customer => {
            return (
              <a
                className="w-20"
                key={customer.name}
                href={customer.url}
                target="_blank"
                rel="noreferrer"
                title={customer.name}
              >
                {customer.logo}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomerSlider;
