import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons/index';
import { EDITOR } from '../../../constants/routes';
import JobComponentButton from './JobComponentButton';

const JobItem = ({id, job, startJob}) => {

  return (
      <section className="flex px-4 py-4 lg:px-5 lg:py-5 border-b">
        <article className="flex-1">
          <div className="mb-4">
            <p className="text-xl font-bold text-fg">
              "{job.title ? job.title : <span className="capitalize">{job.shortName}</span>}"
            </p>
            <p className="text-red-200 italic">
              {job.speakers ? job.speakers : 'No speakers designated.'}
            </p>
            <p className="font-mono text-green-200 mt-2">
              {job.shortName}
            </p>
          </div>
          <p className="text-gray-500 text-sm">
            {job.createdTime}
          </p>
        </article>
        <article className="flex-initial">
          <Link href={{
            pathname: EDITOR,
            query: {
              user: job.username,
              job: job.shortName,
            },
          }} prefetch>
            <JobComponentButton
                color="green"
                icon={<FontAwesomeIcon icon={faPlayCircle} title="play icon" />}
                text="Start"
                onClick={() => {
                  console.log('job IDDDDD', id);
                  startJob(id);
                }}
            />
          </Link>
        </article>
      </section>
  );
};

JobItem.propTypes = {
  id: PropTypes.string,
  job: PropTypes.object,
  startJob: PropTypes.func,
};

export default JobItem;
