import React from 'react';
import Logo from '../Logos/Logo';
import { ImpulseSpinner } from 'react-spinners-kit';

const Loading = () => {
  return (
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-full max-w-sm mt-20">
          <Logo center={true} />
          <div className="flex justify-center mt-8">
            <ImpulseSpinner
                frontColor="#e5ff7a"
                size={40}
            />
          </div>
        </div>
      </div>
  );
};

export default Loading;
