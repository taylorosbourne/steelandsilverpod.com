import React, { FC } from 'react';
import styled from 'styled-components';

import Charlie from '../images/charlie.jpg';
import Taylor from '../images/taylor.jpg';

const HostContainer = styled.div`
  width: 70%;
  margin: 35px 0 65px;
  display: flex;
  justify-content: space-around;
  @media(max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const HostCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  img {
    border-radius: 50%;
    height: 125px;
    width: 125px;
    border: 2px solid teal;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.3);
  }
  @media(max-width: 800px) {
    width: 100%;
  }
`;

const HostName = styled.a`
  text-transform: uppercase;
  font-family: Helvetica;
  border-left: 3px solid teal;
  padding-left: 5px;
`;

const HostSocial = styled.a`
  text-transform: uppercase;
  font-family: Helvetica;
  color: teal;
  font-size: 0.8rem;
`;

const Hosts: FC = () => (
  <div style={{margin: `35px 0`}}>
    <h2 className="section-header">Hosts</h2>
    <HostContainer>
      <HostCard>
        <img src={Charlie} alt="charlie" />
        <HostName>Charles Boettcher</HostName>
        <HostSocial>@papa_betch</HostSocial>
      </HostCard>
      <HostCard>
        <img src={Taylor} alt="Taylor" />
        <HostName>Taylor Osbourne</HostName>
        <HostSocial>@taylorgosbourne</HostSocial>
      </HostCard>
    </HostContainer>
  </div>
);

export default Hosts