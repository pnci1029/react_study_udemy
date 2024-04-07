import { useState } from 'react';
import {styled} from "styled-components";

const ControlDiv = styled.div`
    display: flex;
    flexDirection: column;
    gap: 0.5rem;
    marginBottom: 1.5rem;
`

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
    setIsEmailValid(true);
    setIsPasswordValid(true);
    if (emailNotValid) {
      setIsEmailValid(false);
    }
    if (passwordNotValid) {
      setIsPasswordValid(false);
    }
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;


  return (
    <div id="auth-inputs">
      {/*<div className="controls" >*/}
      <ControlDiv>
        <p>
          <label className={`label ${emailNotValid ? "invalid" : ""} `}>Email</label>
          <input
            type="email"
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label className={`label ${passwordNotValid ? "invalid" : ""} `}>Password</label>
          <input
            type="password"
              className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </ControlDiv>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
