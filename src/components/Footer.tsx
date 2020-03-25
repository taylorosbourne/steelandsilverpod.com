import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  font-size: 0.75rem;
  margin: 0; 
  text-align: center; 
  background: rgb(42,42,42);
  color: #fff;
  font-family: Helvetica;
  text-transform: uppercase; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterLink = styled.a`
  cursor: pointer;
  font-weight: 700; 
  ${props => props.color && css`
    color: ${props.color}
  `}
`;

const Footer: FC = () => (
  <StyledFooter>
    <p style={{ height: `50%`, padding: 0, margin: 0 }}>
      &#169; Steel & Silver Podcast {new Date().getFullYear()}, Produced by Taylor Osbourne and Charlie Boettcher
    </p>
    <p style={{ fontSize: `0.65rem`, padding: 0, margin: 0 }}>
      Site built and designed by Taylor Osbourne.  Built with <FooterLink color="#663399" href="https://www.gatsbyjs.org/">Gatsby</FooterLink>, hosted on <FooterLink color="#029387" href="https://www.netlify.com/">Netlify</FooterLink>, chillin on <FooterLink color="#2CAE48" href="https://github.com/">Github</FooterLink>.
    </p>
  </StyledFooter>
);

export default Footer;
