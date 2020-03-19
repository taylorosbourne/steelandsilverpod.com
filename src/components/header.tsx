import React, { FC } from 'react';

import Nav from './Nav';

const Header: FC = () => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
    }}
  >
    <Nav />
  </header>
);

export default Header;
