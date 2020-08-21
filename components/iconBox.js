const IconBox = ({ icon, title, desc, className }) => (
  <div
    className={`flex flex-col items-center justify-center text-center ${className}`}
  >
    <div className="w-20 h-20">{icon}</div>
    <h4 className="m-2">{title}</h4>
    <span>{desc}</span>
  </div>
);

export default IconBox;
