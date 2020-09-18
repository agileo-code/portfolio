const sectionLayout = ({ id, children, className }) => (
  <div
    id={id}
    className={`${className} flex flex-col justify-around relative p-2 pt-20 pb-20`}
  >
    {children}
  </div>
);
export default sectionLayout;
