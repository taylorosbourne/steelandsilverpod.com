import React from 'react';
import styled from 'styled-components';

const StyledEpisode = styled.div`
  color: rgb(42,42,42);
  width: 100%;
  font-family: Helvetica;
  h3 {
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
