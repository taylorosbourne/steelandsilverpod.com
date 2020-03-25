import React, { FC } from 'react';
import styled from 'styled-components';

import Header from './header';
import Footer from './Footer';
import '../styles/layout.css';

const Main = styled.main`
  margin: 0 auto;
  max-width: 1260px;
  padding: 0px 1.0875rem 1.45rem 0;
`;

interface Props {
  children: any;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
