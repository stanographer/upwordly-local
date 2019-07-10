import React from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const JobItem = ({job}) => {
  const location = () => {
    return `${document.location.protocol}//${document.location.host}/editor?user=${job.username}&job=${job.shortName}`;
  };

  return (
      <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
        <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
          <span className="text-md font-mono text-green-200">{job.shortName}</span>
        </div>
        <div className="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
          <div className="bg-orange h-2 rounded-full flex-grow mr-2" />
          {job.title}
        </div>
        <div className="flex w-3/5 md:w/12">
          <div className="w-1/2 px-4">
            <div className="text-right">
              0.0010 BTC
            </div>
          </div>
          <div className="w-1/2 px-4">
            <Link href={location()} prefetch>
              <button type="button"
                      className="bg-blue hover:bg-blue-dark text-white border border-blue-dark rounded px-4 py-2">
                <FontAwesomeIcon icon={faPlay} />
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default JobItem;
