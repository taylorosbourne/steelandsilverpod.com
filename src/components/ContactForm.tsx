import React, { useState, FC } from 'react';
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

const ContactForm: FC = () => {
  const classes = useStyles('');
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formValues })
    })
      .catch(error => alert(error));

    document.getElementById('submitted').style.opacity = '1';

    setFormValues({
      name: '',
      email: '',
      message: ''
    })

    setTimeout(() => {
      document.getElementById('submitted').style.opacity = '0';
    }, 3000)
    e.preventDefault();
  };

  return (
    <div style={{margin: `55px 0`}}>
      <h2 className="section-header">Contact</h2>
      <Form 
        name="contact"
        className={classes.root} 
        noValidate autoComplete="off" 
        method="POST" 
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-textarea"
          label="Name"
          name="name"
          placeholder="Geralt of Rivia"
          multiline
          onChange={handleChange}
          value={formValues.name}
          style={{width: `100%`}}
        />
        <TextField
          id="standard-textarea"
          label="Email"
          name="email"
          placeholder="geralt@riv.ia"
          multiline
          onChange={handleChange}
          value={formValues.email}
          style={{width: `100%`}}
        />
        <TextField
          id="outlined-textarea"
          label="Message"
          name="message"
          placeholder="Good luck on the path..."
          multiline
          onChange={handleChange}
          value={formValues.message}
          variant="outlined"
          style={{width: `100%`, marginTop: `25px`}}
        />
        <SubmitButton type="submit">Submit </SubmitButton>
      </Form>
      <p id="submitted" style={{opacity: 0, fontFamily: `Helvetica`, marginLeft: `5px`, transition: `0.3s ease`}}>Wooh!  Thanks for contacting Steel & Silver <span role="img" aria-label="emoji">⚔️</span></p>
    </div>
  );
}
export default ContactForm;
