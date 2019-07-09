import React from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import EditorComponent from '../../src/components/EditorComponent';

const LiveTranscript = dynamic(() => import('../../src/components/LiveTranscript'));

const Editor = props => {
  const {router} = props;

  return (
      <div>
        <div className="flex bg-gray-200">
          <div className="flex-1 text-green-200 text-center bg-gray-400 h-screen ">
            <LiveTranscript
                user={router.query.user}
                job={router.query.job}
                render={(state) => (
                    <EditorComponent
                        {...state}
                    />
                )}
            />
          </div>
          <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
        </div>

      </div>
  );
};

export default withRouter(Editor);
