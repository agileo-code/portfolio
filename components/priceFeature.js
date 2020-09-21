const PriceFeature = ({ text }) => (
  <p className="flex items-center text-gray-600 mb-2">
    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        className="w-3 h-3"
        viewBox="0 0 24 24"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>{' '}
    </span>
    {text}
  </p>
);

export default PriceFeature;
