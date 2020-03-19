import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import Header from './header';
import '../styles/layout.css';

const FooterLink = styled.a`
  cursor: pointer;
  font-weight: 700; 
  ${props => props.color && css`
    color: ${props.color}
  `}
`;

interface Props {
  children: any;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1260,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main style={{ minHeight: `80vh` }}>{children}</main>
      </div>
      <footer style={{ width: `100%`, fontSize: `0.75rem`, margin: 0, textAlign: `center`, background: `rgb(42,42,42)`, color: `#fff`, fontFamily: `Helvetica`, textTransform: `uppercase`, display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `center` }}>
        <p style={{ height: `50%`, padding: 0, margin: 0 }}>
          &#169; Steel & Silver Podcast 2019, Produced by Taylor Osbourne and Charlie Boettcher
          </p>
        <p style={{ fontSize: `0.65rem`, padding: 0, margin: 0 }}>
          Site built and designed by Taylor Osbourne.  Built with <FooterLink color="#663399" href="https://www.gatsbyjs.org/">Gatsby</FooterLink>, hosted on <FooterLink color="#029387" href="https://www.netlify.com/">Netlify</FooterLink>, chillin on <FooterLink color="#2CAE48" href="https://github.com/">Github</FooterLink>.
          </p>
      </footer>
    </>
  );
};

export default Layout;
