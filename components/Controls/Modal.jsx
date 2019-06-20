import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

// Dynamically loaded components.
const FontComponent = dynamic(() => import('../Modal/Font'));

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

const modals = {
  font: {
    header: 'Font',
    component: <FontComponent />
  }
};

const Modal = ({title}) => {
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

export default Modal;
