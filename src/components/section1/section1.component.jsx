import React from 'react';
import styled from 'styled-components';
import Wrapper from '../wrapper/wrapper.component'
import "./section1.css";

const Section1Styled = styled.div`
  background-color: transparent;
`;

export default function Section1() {
  return (
    <Section1Styled id="section1">
      <Wrapper>
        <div className="section1-container">
          <div className="section1-title">
            <h1>PK</h1>
          </div>
          <div className="section1-name">
            <h2>
            — Pete Keating is a Product Designer, junior developer (ReactJS & SwiftUI) and musician living in New York City.
            </h2>
          </div>
        </div>
      </Wrapper>
    </Section1Styled>
  );
}
