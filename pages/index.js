// import Provider from '../components/Provider';
// import React from 'react';
// import Typed from 'react-typed';
// import Link from 'next/link';
//
// const Index = props => (
//     <Provider>
//       <div
//           className="landing-wrapper"
//           id="landing-wrapper">
//         <section className="intro">
//           <div
//               className="content
//               inline-block
//               align-middle">
//             <h1 className="text-5xl landing-title">UPWORDLY</h1>
//             <p>
//               <Typed
//                   className="marquee"
//                   strings={[
//                     'One platform to sync, send, and integrate your real-time transcriptions.',
//                     'Web-based live stenography, anywhere.'
//                   ]}
//                   typeSpeed={40} />
//             </p>
//             <p style={{
//               padding: '0 4rem'
//             }}>
//               <Link href={`/view?user=stanley&job=mocj`}><a>hello</a></Link>
//               Upwordly is a real-time transcription delivery tool and a content management system (CMS) for real-time
//               stenographers. You login, create a job, connect your CAT software via a small helper app, and start
//               writing. Distribute your live feed to anyone via a short URL and that's it! Since it is web based, there's
//               no need for your consumers to install anything on their end. When the job is over, it's your choice to use
//               the variety of tools to save or disseminate the transcript or to delete it. Simple.
//             </p>
//           </div>
//         </section>
//       </div>
//     </Provider>
// );
//
// Index.getInitialProps = async function ({pathname, req}) {
//   console.log('initial: ', pathname, req);
//   return {pathname: req.pathname || pathname};
// };
//
// export default Index;
//
//

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Router, withRouter } from 'next/router';
import { auth, firebase } from '../src/firebase';

class Index extends React.Component {

  handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    auth.signInWithPopup(provider)
        .then(() => {
          alert('You are signed In');
        })
        .catch(err => {
          alert('OOps something went wrong check your console');
          console.log(err);
        });
  };
  handleLogout = () => {
    auth.signOut().then(function () {
      alert('Logout successful');
    }).catch(function (error) {
      alert('OOps something went wrong check your console');
      console.log(err);
    });
  };

  render() {
    return (
        <div>
          <Head>
            <title>Upword.ly</title>
          </Head>
          <div className="hero">
            <h1 className="title">Welcome to Firebase Authentication in Next.js!</h1>
            <p className="description">
              Click on the Dashboard link to visit the dashboard page.
            </p>
            <div className="row">
              <Link href="/dashboard">
                <a className="card">
                  <h3>Go to Dashboard&rarr;</h3>
                  <p>Visit Dashboard</p>
                </a>
              </Link>
              <button onClick={this.handleSignIn}>Sign In using google</button>
              <button onClick={this.handleLogout}>Logout</button>
            </div>
          </div>
          <style jsx>{`
.hero {
width: 100%;
color: #333;
}
.title {
margin: 0;
width: 100%;
padding-top: 80px;
line-height: 1.15;
font-size: 48px;
}
.title,
.description {
text-align: center;
}
.row {
max-width: 880px;
margin: 80px auto 40px;
display: flex;
flex-direction: row;
justify-content: space-around;
}
.card {
padding: 18px 18px 24px;
width: 220px;
text-align: left;
text-decoration: none;
color: #434343;
border: 1px solid #9b9b9b;
}
.card:hover {
border-color: #067df7;
}
.card h3 {
margin: 0;
color: #067df7;
font-size: 18px;
}
.card p {
margin: 0;
padding: 12px 0 0;
font-size: 13px;
color: #333;
}
`}</style>
        </div>
    );
  }
}

export default withRouter(Index);
