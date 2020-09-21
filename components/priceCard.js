import PriceFeature from './priceFeature';

const PriceCard = ({ pack }) => (
  <div className="p-4 xl:w-1/4 md:w-1/3 w-full">
    <div
      className={`h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden ${
        pack.popular ? 'border-blue-500' : 'border-gray-500'
      }`}
    >
      {pack.popular && (
        <span className="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
          POPULAR
        </span>
      )}
      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
        {pack.title}
      </h2>
      <div>
        <span className="text-sm line-through">
          Regular price {pack.regularPrice}€
        </span>
      </div>
      <h1 className="text-5xl text-red-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
        <span>{pack.price} €</span>
      </h1>
      {pack.features.map(feature => (
        <PriceFeature text={feature} />
      ))}
      <button
        type="button"
        className="flex items-center mt-auto text-white bg-blue-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded"
      >
        Comprar
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-auto"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
      <p className="text-xs text-gray-500 mt-3">{pack.extraInfo}</p>
    </div>
  </div>
);

export default PriceCard;
