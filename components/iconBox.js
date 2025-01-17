import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import { LangContext } from '../i18n-nimbel';
import { onClick } from './Menu';

const IconBox = ({
  icon,
  title,
  desc,
  link,
  regularPrice,
  specialOffer,
  offerText
}) => {
  const { t } = useContext(LangContext);
  const router = useRouter();

  return (
    <div className="p-4 md:mb-0 mb-6 flex flex-col text-center items-center">
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 mb-5 flex-shrink-0">
        <div className="w-10 text-corporative-blue">
          <img src={icon} width="80" height="80" alt={title} />
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-gray-900 text-xl title-font font-medium mb-3">
          {title}
        </h3>
        <p className="leading-relaxed text-base text-gray-700">{desc}</p>
        {link && (
          <Link href={link} legacyBehavior>
            <a className="mt-3 text-blue-600 inline-flex items-center">
              {t('[More info]')}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
        )}
      </div>
      <div className="flex flex-col text-xs justify-start text-gray-800">
        {regularPrice && (
          <div className="mt-3">
            <span className="text-gray-600">{t('[Price]')}: </span>
            {specialOffer ? (
              <span className="text-sm line-through">{`${regularPrice} €`}</span>
            ) : (
              <span className="text-red-900 text-base">{`${regularPrice} €`}</span>
            )}
          </div>
        )}
        {specialOffer && (
          <div>
            <span className="text-gray-600">{t('[Special Offer]')}: </span>
            <span className="text-red-900 text-base">{`${specialOffer} €`}</span>
            <span className="text-sm ml-3">{offerText}</span>
          </div>
        )}
        {specialOffer && (
          <div>
            <span className="text-gray-600">{t('[You save]')}:</span>
            <span className="text-red-900">{`${
              regularPrice - specialOffer
            } € (${(
              ((regularPrice - specialOffer) / regularPrice) *
              100
            ).toFixed(2)}%)`}</span>
          </div>
        )}
      </div>
      {regularPrice && (
        <button
          type="button"
          onClick={() => onClick(router, 'contact')}
          className="text-white bg-corporative-blue border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg mt-3"
        >
          {t('[Know more]')}
        </button>
      )}
    </div>
  );
};

export default IconBox;
