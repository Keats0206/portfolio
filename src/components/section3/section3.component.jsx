import React from 'react';
import styled from 'styled-components';
import Wrapper from '../wrapper/wrapper.component'
import "./section3.css";
import profPic from "./pete.jpg"

const Section3Styled = styled.div`background-color: transparent;`;

export default function Section3() {
  return (
    <Section3Styled id="section3">
      <Wrapper>
        <div className="section3-container">
          <div className="section3-title">
              <h1>Contact</h1>
            </div>
            <div className="section3-image">
              <img src={profPic} alt="Pete Profile Pic" />
            </div>            
            <div className="section3-body">
              <p>
                I’m currently looking for a full time junior developer role with a startup working in the defi, creator economy or music space. If you are hiring, I’d love to hear from you. Or, if you just want to chat, my email is always open.
              </p>
            </div>
            <button 
            onClick={() => {
                window.location.href = `mailto:pete@pekeating.com`;
              }}>
              Say Hello
            </button>
        </div>
      </Wrapper>
    </Section3Styled>
  );
}
