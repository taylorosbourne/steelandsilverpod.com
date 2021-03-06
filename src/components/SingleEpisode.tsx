import React, { FC } from 'react';
import styled from 'styled-components';

import Hosts from './Hosts';
import ContactForm from './ContactForm';

const StyledEpisode = styled.div`
  padding: 5px;
  color: rgb(42,42,42);
  width: 100%;
  font-family: Helvetica;
  a {
    text-decoration: none;
    color: teal;
  }
  h3, h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
    border-left: 3px solid teal;
    padding-left: 5px;
    font-size: 1.5rem;
  }
`;

interface Props {
  title: string;
  date: string;
  __html: string;
  audio: string;
};

const SingleEpisode: FC<Props> = ({ title, date, __html, audio }) => (
  <div style={{ maxWidth: 860, margin: `0 auto` }}>
    <br />
    <h1 style={{ fontWeight: 400, color: `teal` }}>{title}</h1>
    <h4 style={{ fontWeight: 200 }}>{date}</h4>
    <iframe title={title} width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={audio}></iframe>
    <StyledEpisode
      id="main"
      dangerouslySetInnerHTML={{ __html }}
    />
    <Hosts />
    <ContactForm />
  </div>
);

export default SingleEpisode;
