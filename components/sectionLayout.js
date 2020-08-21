const sectionLayout = ({ children, className }) => (
  <div className={`${className} flex flex-col justify-around relative p-10`}>
    {children}
  </div>
);
export default sectionLayout;
