import React from 'react';
import ViewComponent from '../../../src/components/View';

function View(props) {
  return <ViewComponent {...props} />;
}

View.getInitialProps = ({ query }) => {
  return query;
};

export default View;
