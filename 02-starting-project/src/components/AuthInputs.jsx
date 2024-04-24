import {useState} from 'react';
import {styled} from "styled-components";
import Button from "./Button.jsx";
import Input from "./Input.jsx";
import CustomInput from "./Input.jsx";

const ControlDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
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

    console.log(emailNotValid);


    return (
        <div id="auth-inputs">
            <ControlDiv>
                <Input
                    lable="email"
                    type="email"
                    $invalid={emailNotValid}
                    onChange={(event) => handleInputChange('email', event.target.value)}
                />
                <CustomInput lable={passwordNotValid ? "$invalid" : ""}/>
                <Input
                    lable="password"
                    type="password"
                    $invalid={passwordNotValid}
                    onChange={(event) =>
                        handleInputChange('password', event.target.value)
                    }
                />
            </ControlDiv>
            <div className="actions">
                <Button type="button" className="text-button">
                    Create a new account
                </Button>
                <Button className='button' onClick={handleLogin}>Sign In</Button>
            </div>
        </div>
    );
}
