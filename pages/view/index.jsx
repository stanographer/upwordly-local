import React from 'react';
import { withRouter } from 'next/router';
import ViewComponent from '../../src/components/View';

// function View(props) {
//   const { router } = props;
//   return (
//     <div>
//       <p>
//         {router.query.user} {router.query.job}
//       </p>
//     </div>
//   );
// }
//
// export default withRouter(View);

const View = () => {
  return <div>This is the view page yo!</div>;
};

export default View;
