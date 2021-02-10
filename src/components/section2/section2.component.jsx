import React from 'react';
import styled from 'styled-components';
import Wrapper from '../wrapper/wrapper.component';
import Card from '../card/card.component';
import "./section2.css";

const Section2Styled = styled.div`background-color: transparent;`;

export default function Section2() {
  return (
    <Section2Styled id="section2">
      <Wrapper>
        <div className="section2-container">
          <div className="section2-title">
            <h1>Development</h1>
          </div>
        <div className="cards-container">
            <Card
              imageUrl='https://images.unsplash.com/photo-1577930595497-05902654453e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGp8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
              title="Remix Assist"
              body='A tool for music producers to access metadata about songs using the Spotify API.'
              git='https://github.com/Keats0206/remix-assist'
              url='http://www.remixassist.com/'
              skill1=''
              skill2=''
              skill3=''
            ></Card>
            <Card
              imageUrl='https://images.unsplash.com/photo-1541410702738-f87a5449e456?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGNyeXB0b3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
              title="Crypto Tracker"
              body='A dynamic crypto currency tracker build with the CoinGecko API'
              git='https://github.com/Keats0206/crypto-tracker'
              url='https://whispering-ocean-30053.herokuapp.com/'
              skill1=''
              skill2=''
              skill3=''
            ></Card>
            <Card
              imageUrl='https://images.unsplash.com/photo-1585834377505-625794024e04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80'
              title="Creator Rush"
              body='A landing page concept for an MVP creator platform launch that collects emails in Airtable'
              git='https://github.com/Keats0206/creatorrush'
              url='https://creatorrush.herokuapp.com/'
              skill1=''
              skill2=''
              skill3=''
            ></Card>
        </div>
        </div>
      </Wrapper>
    </Section2Styled>
  );
}
