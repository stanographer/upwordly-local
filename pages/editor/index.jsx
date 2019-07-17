import React from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import EditorComponent from '../../src/components/Editor';
import withAuth from '../../src/components/Session/WithAuth';

const ConnectionProvider = dynamic(() => import('../../src/components/ShareDB/ConnectionProvider'));

const Editor = props => {
  const {router} = props;

  return (
      <div>
        <div className="flex bg-gray-200 h-screen">
          <div className="flex-1 text-green-200 text-center bg-gray-400 h-auto">
            <ConnectionProvider
                user={router.query.user}
                job={router.query.job}
                render={(state) => (
                    <EditorComponent
                        {...state}
                    />
                )}
            />
          </div>
        </div>
      </div>
  );
};

export default withAuth(withRouter(Editor));
