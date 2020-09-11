import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { LanguageContext } from '../context/language';

export const onClick = (router, section) => {
  const pageSection = document.getElementById(section);
  if (pageSection) {
    pageSection.scrollIntoView({
      behavior: 'smooth'
    });
  } else {
    router.push(`/#${section}`);
  }
};

export default function Menu({ desktop }) {
  const { getTranslation } = useContext(LanguageContext);
  const router = useRouter();

  return (
    <div
      className={`grid ${
        desktop ? 'grid-flow-col gap-5 mr-5' : 'grid-cols-1 gap-1 text-3xl'
      }`}
    >
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => onClick(router, 'main')}
      >
        {getTranslation('[Home]')}
      </button>
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => onClick(router, 'services')}
      >
        {getTranslation('[Services]')}
      </button>
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => onClick(router, 'projects')}
      >
        {getTranslation('[Projects]')}
      </button>
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => onClick(router, 'contact')}
      >
        {getTranslation('[Contact]')}
      </button>
      <Link href="/training">
        <button type="button" className="cursor-pointer">
          {getTranslation('[Training]')}
        </button>
      </Link>
    </div>
  );
}
