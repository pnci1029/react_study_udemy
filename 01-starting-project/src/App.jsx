import Header from "./components/Header";
import UserInput from "./components/UserInput";
import {useState} from "react";
import Results from "./components/Results";
import {useInputValidator} from "./components/hooks/useInputValidator";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 12000,
        annualInvestment: 1200,
        expectedReturn: 10,
        duration: 6,
    })

    const {inputIsValid} = useInputValidator(userInput.duration);

    function handleChange(inputIdentifier, newValue) {
        if (inputIsValid) {
            alert("0이상 입력해주세요")
            return false;
        }
        setUserInput(
            prev => {
                return {
                    ...prev,
                    [inputIdentifier]: +newValue
                }
            });
    }


    return (
        <>
            <Header/>
            <UserInput onChange={handleChange} userInput={userInput}/>
            <Results input={userInput} />
        </>
    )
}

export default App
