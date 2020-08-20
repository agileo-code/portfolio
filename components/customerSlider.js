import customers from '../lib/customers';

const CustomerSlider = () => (
  <>
    <h4>Who trust in us:</h4>
    <div className="w-full bg-white bg-opacity-75">
      <div className="flex justify-around items-center p-4 h-20">
        {customers.map(customer => (
          <a
            className="h-full"
            key={customer.name}
            href={customer.url}
            target="_blank"
            title={customer.name}
          >
            {customer.logo}
          </a>
        ))}
      </div>
    </div>
  </>
);

export default CustomerSlider;
