import Link from 'next/link';

const ProjectBox = ({ icon, title, desc, className, url, id }) => (
  <div
    className={`flex flex-col items-center justify-center text-center ${className}`}
  >
    <div className="w-full h-full">
      <img src={icon}></img>
    </div>
    <h4 className="m-2">{title}</h4>
    <span>{desc}</span>
    <div className="flex justify-center w-full">
      {url && (
        <a className="m-2" href={url} target="_blank">
          View Demo
        </a>
      )}
      <Link href="/projects/[id]" as={`/projects/${id}`}>
        <a className="m-2" target="_blank">
          More info
        </a>
      </Link>
    </div>
  </div>
);

export default ProjectBox;
