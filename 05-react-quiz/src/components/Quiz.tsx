import {useState} from "react";
import Question from '../question.js';

enum AnswerStatus {
    WRONG = "WRONG",
    WAIT = "WAIT",
}

export function Quiz() {
    const [isAnswered, setIsAnswered] = useState(AnswerStatus.WAIT);

    const [question, setQuestion] = useState([]);
    const activeQuestionIdx = question.length;

    // 버튼 클릭 시 정담 체크하는 함수
    function handleClickedAnswer(answer) {
        setQuestion((prev) => {
            return [...prev, answer];
        })
    }

    console.log(question)

    return (
        <div id={"quiz"}>
            <div id={"question"}>
                <h2>{Question[activeQuestionIdx].text}</h2>
                <ul>
                    {Question[activeQuestionIdx].answers.map((answer) =>
                        <li key={answer} className={"answer"}>
                            <button onClick={() => handleClickedAnswer(answer)}>{answer}</button>
                        </li>
                    )}
                    {isAnswered === AnswerStatus.WRONG ? (
                        <p style={{color: "red"}}>틀렸습니다 다시 선택하세요 씨발년아</p>
                    ) : (<></>)}
                </ul>
            </div>
        </div>
    );
}