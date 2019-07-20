import React from 'react';
import ArchiveComponent from '../../src/components/Dashboard/ArchiveComponent';
import Wrapper from '../../src/components/Dashboard/Wrapper';
import withAuth from '../../src/components/Session/WithAuth';

const Archive = props => {
  return (
      <Wrapper
          htmlTitle="Upword.ly - Archive"
          title="archive">
        <ArchiveComponent {...props} />
      </Wrapper>
  );
};

export default withAuth(Archive);