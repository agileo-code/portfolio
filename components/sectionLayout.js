const sectionLayout = ({ dark, children, className }) => (
  <div
    className={`${className} flex flex-col justify-around text-black ${
      dark ? 'bg-gray-100' : 'bg-gray-200'
    } relative p-10`}
  >
    {children}
  </div>
);
export default sectionLayout;
