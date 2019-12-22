import React from 'react';
import styled from 'styled-components';

const StyledEpisode = styled.div`
  padding: 5px;
  color: teal;
  width: 100%;
  h3 {
    font-family: Helvetica;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const Episode = ({children}) => (
  <StyledEpisode>
    {children}
  </StyledEpisode>
);

export default Episode;
