const sectionLayout = ({ id, children, className, style }) => (
  <div
    id={id}
    className={`${className} flex flex-col justify-around relative p-2 pt-20 pb-20`}
    style={style}
  >
    {children}
  </div>
);
export default sectionLayout;
