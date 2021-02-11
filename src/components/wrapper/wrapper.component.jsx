import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    min-height: 100vh;
    align-items: center;
    h1 {
      font-family: Montserrat;
      font-size: 1.5rem;
    }
    h2 {
      font-family: Montserrat;
    }
    h3 {
      font-family: Montserrat;
    }
    p {
      font-family: Roboto;
      font-size: 18px;
    }
`;

export default function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}
