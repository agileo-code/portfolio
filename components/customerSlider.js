import customers from '../lib/customers';

const CustomerSlider = () => (
  <div className="flex items-center text-gray-500 flex-col">
    <span>Who trust in us</span>
    <div className="flex justify-center text-corporative-slideLight pr-20 pl-20 p-4 bg-gray-400 rounded-sm">
      <div className="grid gap-20 grid-cols-5 max-w-3xl">
        {customers.map(customer => (
          <a
            className="self-center"
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
  </div>
);

export default CustomerSlider;
