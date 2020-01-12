import React from 'react';
import Link from 'next/link';
import Button from '../../src/components/Dashboard/Button';

const Watch = () => {
  return (
    <div className="m-8">
      <h2 className="text-4xl">URL incorrectly formatted</h2>
      <p className="text-2xl">
        Live transcription URLs must be in the form:{' '}
        <i>upword.ly/watch/[username]/[job slug]</i>.
      </p>
      <Link href="/">
        <Button
          color="green"
          classNames="mx-0 my-6"
          text="Return to landing page"
          type="button"
        />
      </Link>
    </div>
  );
};

export default Watch;
