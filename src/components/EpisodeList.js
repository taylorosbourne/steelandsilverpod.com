import React from 'react';
import styled from 'styled-components';
import Episode from './Episode';

const EpisodeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  * {
    margin: 10px auto;
  }
`;

const Episodes = styled.div`
  width: 100%;
`;

const EpisodeList = () => (
  <EpisodeContainer>
    <h2 style={{textTransform: `uppercase`, color: `rgb(42,42,42)`, paddingLeft: `5px`, color: `rgb(42,42,42)`, borderLeft: `3px solid teal`, width: `100%`}}>EPISODES</h2>
    <Episodes>
      <Episode>
        <h3>Episode IV: Hearts of stone with Brett from 'Whispers of Oxenfurt'</h3>
        <small style={{color: `rgb(42,42,42)`}}>December 20, 2019</small>
        <p style={{color: `rgb(42,42,42)`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Episode>
    </Episodes>
    <Episodes>
      <Episode>
        <h3 style={{textTransform: `uppercase`}}>Episode III: Our Witcher netflix cast picks</h3>
        <small style={{color: `rgb(42,42,42)`}}>December 20, 2019</small>
        <p style={{color: `rgb(42,42,42)`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Episode>
    </Episodes>
    <Episodes>
      <Episode>
        <h3 style={{textTransform: `uppercase`}}>Episode II: Witcher 2077: Cyberpunk gameplay reaction</h3>
        <small style={{color: `rgb(42,42,42)`}}>December 20, 2019</small>
        <p style={{color: `rgb(42,42,42)`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Episode>
    </Episodes>
    <Episodes>
      <Episode>
        <h3 style={{textTransform: `uppercase`}}>Episode I: What makes a witcher?</h3>
        <small style={{color: `rgb(42,42,42)`}}>December 20, 2019</small>
        <p style={{color: `rgb(42,42,42)`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Episode>
    </Episodes>
    <div style={{textAlign: `left`, width: `100%`, padding: `5px`}}>
      <a style={{textTransform: `uppercase`, color: `teal`, fontFamily: `Helvetica`}}>View All episodes</a>
    </div>
  </EpisodeContainer>
);

export default EpisodeList;
