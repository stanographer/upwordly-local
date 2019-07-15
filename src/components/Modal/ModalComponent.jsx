import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

// Dynamically loaded components.
const FontComponent = dynamic(() => import('./Font'));
const TextComponent = dynamic(() => import('./Text'));
const ColorComponent = dynamic(() => import('./Color'));
const ShareComponent = dynamic(() => import('./Share'));

const Title = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.2;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
  display: block;
  width: 100%;
`;


const ModalComponent = ({title, user, job}) => {
  const modals = {
    color: {
      header: 'Color',
      component: <ColorComponent />,
    },
    font: {
      header: 'Font',
      component: <FontComponent />,
    },
    share: {
      header: 'Share',
      component: <ShareComponent user={user} job={job} />,
    },
    text: {
      header: 'Text',
      component: <TextComponent />,
    },
  };

  return (
      <div>
        <Title>{modals[title]['header']}</Title>
        <div className="flex flex-grow-1 my-8">
          {
            modals[title]['component']
          }
        </div>
      </div>
  );
};

export default ModalComponent;
