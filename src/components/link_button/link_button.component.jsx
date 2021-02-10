import React, { Component } from 'react'
import styled from 'styled-components';

const CardLinkStyled = styled.div`
    display: flex;
    background: palevioletred;
    color: white;
    font-size: 1em;
    margin: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
`;

export default function CardLink() {
  return (
    <CardLinkStyled>
        Github
    </CardLinkStyled>
  );
}