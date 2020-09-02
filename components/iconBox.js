import Link from 'next/link';

const IconBox = ({ icon, title, desc, className, link }) => (
  <div
    className={`flex flex-col items-center justify-center text-center ${className}`}
  >
    <div className="w-20 h-20">{icon}</div>
    <h4 className="m-2">{title}</h4>
    <span>{desc}</span>
    {link && (
      <Link href={link}>
        <a className="m-2 border-2 rounded-md border-blue-500 p-1 pr-3 pl-3">
          More info
        </a>
      </Link>
    )}
  </div>
);

export default IconBox;
