import { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import customers from '../lib/customers';

const CustomerSlider = ({ className }) => {
  const [showCustomers, setShowCustomers] = useState([]);
  const containerEl = useRef(null);

  let group = 0;
  const updateCustomersToShow = () => {
    const itemsByGroup = Math.ceil(containerEl.current.clientWidth / 220);
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
    <div className={`flex items-center text-grey-500 flex-col ${className}`}>
      <div className="flex justify-center text-white p-10 bg-blue-700 rounded-sm h-10 w-full">
        <div
          ref={containerEl}
          className="flex justify-around items-center w-full"
        >
          {showCustomers.map(customer => {
            return (
              <AFade
                key={customer.name}
                href={customer.url}
                target="_blank"
                rel="noopener noreferrer"
                title={customer.name}
              >
                {customer.logo}
              </AFade>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomerSlider;

const fadeIn = keyframes`
   from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

const AFade = styled.a`
  width: 5rem;
  animation: ${fadeIn} 1s ease-in;
`;
