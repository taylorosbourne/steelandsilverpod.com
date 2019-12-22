import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  @media(max-width: 800px) {
    width: 100%;
  }
`;

const ContactInput = styled.input`
  font-size: 1.5rem;
  font-family: 'Helvetica';
  margin: 15px 15px 15px 0px;
  border: 0;
  border-bottom: 1.5px solid rgba(0,0,0,0.1);
  :focus {
    outline: none;
    border-bottom: 1.5px solid teal;
  }
  @media(max-width: 800px) {
    width: 100%;
  }
`;

const ContactMessage = styled.textarea`
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 5px;
  max-width: 90%;
  min-width: 90%;
  padding: 5px;
  margin: 15px 0;
  min-height: 200px;
  font-size: 1.5rem;
  font-family: Helvetica;
  :focus {
    outline: none;
    border: 1.5px solid teal;
  }
  @media(max-width: 800px) {
    width: 100%;
  }
`;

const SubmitButton = styled.button`
  background: rgb(242,242,242);
  text-transform: uppercase;
  color: teal;
  font-family: Helvetica;
  padding: 5px 20px;
  border: 0;
  font-weight: 600;
  border-left: 3px solid teal;
  border-bottom: 3px solid teal;
  border-radius: 5px;
  margin: 15px 0;
  cursor: pointer;
  :focus {
    outline: none;
    animation: push 0.3s linear;
  }
  @keyframes push {
    0% {
      border-left: 3px solid teal;
      border-bottom: 3px solid teal;
    }
    50% {
      border: 0;
      transform: translate(-3px, 3px);
    }
    100% {
      border-left: 3px solid teal;
      border-bottom: 3px solid teal;
    }
  }
  @media(max-width: 800px) {
    width: 100%;
  }
`;

const ContactForm = () => (
  <div style={{margin: `55px 0`}}>
    <h2 className="section-header">Contact</h2>
    <Form>
      <ContactInput type="text" placeholder="name" />
      <ContactInput type="email" placeholder="email" />
      <ContactMessage placeholder="good luck on the path..."></ContactMessage>
      <SubmitButton onClick={e => e.preventDefault()}>Submit </SubmitButton>
    </Form>
  </div>
);

export default ContactForm;
