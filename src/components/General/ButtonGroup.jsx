import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1.3rem;
  padding: 1.2rem;
`;

const ButtonGroup = () => {
  return (
      <div className="fixed-center">
        <Button className="
        lg
        bg-gray-300
        hover:bg-gray-400
        text-gray-800
        font-bold
        py-2
        px-4
        rounded-l">
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               className="
          fill-current
          w-4
          h-4
          mr-2">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Text Size</span>
        </Button>
        <Button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          Next
        </Button>
      </div>
  );
};

export default ButtonGroup;
