import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
    '& label.Mui-focused': {
      color: 'teal',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'teal',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'teal',
      },
    }
  },
}));

const Form = styled.form`
  width: 70%;
  margin: 0;
  padding: 0;
  @media(max-width: 1100px) {
    max-width: 90%;
  }
`;


const SubmitButton = styled.button`
  background: rgb(242,242,242);
  display: block;
  text-transform: uppercase;
  color: teal;
  font-family: Helvetica;
  padding: 5px 20px;
  border: 0;
  font-weight: 600;
  border-left: 3px solid teal;
  border-bottom: 3px solid teal;
  border-radius: 5px;
  margin: 15px 8px;
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
  @media(max-width: 1100px) {
    width: 100%;
  }
`;

const ContactForm = () => {
  const classes = useStyles();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div style={{margin: `55px 0`}}>
      <h2 className="section-header">Contact</h2>
      <Form 
        className={classes.root} 
        noValidate autoComplete="off" 
        netlify
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-textarea"
          label="Name"
          placeholder="Geralt of Rivia"
          multiline
          style={{width: `100%`}}
        />
        <TextField
          id="standard-textarea"
          label="Email"
          placeholder="geralt@riv.ia"
          multiline
          style={{width: `100%`}}
        />
        <TextField
          id="outlined-textarea"
          label="Message"
          placeholder="Good luck on the path..."
          multiline
          variant="outlined"
          style={{width: `100%`, marginTop: `25px`}}
        />
        <SubmitButton type="submit">Submit </SubmitButton>
      </Form>
      {isSubmitted && 
        <p style={{fontFamily: `Helvetica`, marginLeft: `5px`}}>Wooh!  Thanks for contacting Steel & Silver ⚔️</p>
      }
    </div>
  );
}
export default ContactForm;
