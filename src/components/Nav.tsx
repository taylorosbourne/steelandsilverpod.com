import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Signs from '../images/signs.png';

const StyledNav = styled.nav`
  width: 100vw;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(42,42,42);
  ul {
    min-width: 10%;
    height: 100%;
    margin: 15px auto;
    padding: 0;
    font-family: Helvetica;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    li {
      margin: 0;
      padding: 0;
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
      transition: 0.3s ease;
      color: rgb(242,242,242);
      cursor: pointer;
      :hover {
        color: teal;
      }
    }
    span {
      color: teal;
      margin: 0 5px;
      font-weight: 700;
    }
  }
`;


const Nav: FC = () => (
  <StyledNav>
    <Link to="/">
      <img style={{ height: `50px`, margin: `15px auto` }} src={Signs} alt="signs" />
    </Link>
  </StyledNav>
);

export default Nav;