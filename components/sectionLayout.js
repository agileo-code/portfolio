const sectionLayout = ({ dark, children, className }) => (
  <div
    className={`${className} flex flex-col justify-around text-corporative-color ${
      dark ? 'bg-corporative-slideDark' : 'bg-corporative-slideLight'
    } relative p-10`}
  >
    {children}
  </div>
);
export default sectionLayout;
