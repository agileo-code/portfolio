import CustomerSlider from './customerSlider';
const MainSlide = () => (
  <div className="flex flex-col justify-around bg-gray-900 h-screen relative p-10">
    <div className="flex items-center flex-1">
      <div>
        <h1 className="text-white">RUSHMORE CODE</h1>
        <h2 className="text-white">
          The future is here, come in and pay for it.
        </h2>
        <h2 className="text-white">Show me the money.</h2>
      </div>
    </div>
    <CustomerSlider />
  </div>
);

export default MainSlide;
