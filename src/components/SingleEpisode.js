import React from 'react';
import styled from 'styled-components';

const StyledEpisode = styled.div`
  padding: 5px;
  color: rgb(42,42,42);
  width: 100%;
  font-family: Helvetica;
  a {
    text-decoration: none;
    color: teal;
  }
  h3 {
    text-transform: uppercase;
    letter-spacing: 2px;
    border-left: 3px solid teal;
    padding-left: 5px;
  }
`;

const SingleEpisode = ({title, date, __html, audio}) => (
  <div style={{maxWidth: 860, margin: `0 auto`}}>
    <br />
    <br />
    <h1 style={{fontWeight: `400`,color: `teal`}}>{title}</h1>
    <h4 style={{fontWeight: `200`}}>{date}</h4>
    <StyledEpisode
      id="main"
      dangerouslySetInnerHTML={{ __html }}
    />
  </div>
);

export default SingleEpisode;
