import React from 'react';
import NavLogo from '../../components/Logos/NavLogo';

const NotBegun = () => {
  return (
    <div className="container mx-auto h-full flex justify-center items-center">
      <div className="w-full max-w-sm mt-20">
        <NavLogo center={true} />
        <p className="text-center mt-2">
          Hi there! Transcription for this event hasn't begun yet.
        </p>
      </div>
    </div>
  );
};

export default NotBegun;
