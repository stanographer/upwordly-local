import React from 'react';
import { withRouter } from 'next/router';
import ViewComponent from '../../src/components/View';

function View(props) {
  const { router } = props;
  return <ViewComponent user={router.query.user} job={router.query.job} />;
}

export default withRouter(View);
