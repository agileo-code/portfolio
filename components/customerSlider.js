import customers from '../lib/customers';

const CustomerSlider = () => (
  <>
    <h2 className="text-white">Who trust in us</h2>
    <div className="w-full bg-gray-700 border-gray-500 border">
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
