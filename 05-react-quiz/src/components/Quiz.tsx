import {useState} from "react";
import Question from '../question.js';

enum AnswerStatus {
    WRONG = "WRONG",
    WAIT = "WAIT",
}

export function Quiz() {
    // 질문목록을 보여주기위한 상태값. 배열이 0부터 시작이라 초기값 지정
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // 정답 상태값.
    const [currentAnswer, setCurrentAnswer] = useState(1);

    // 정답 선택값.
    const [selectedAnswer, setSelectedAnswer] = useState(7);

    const [isAnswered, setIsAnswered] = useState(AnswerStatus.WAIT);

    const [question, setQuestion] = useState([]);
    const activeQuestionIdx = question.length;

    // 핸들러를 커링으로 정의하여 idx값 처리
    const handleAnswerChange = (idx) => (event) => {
        // setSelectedAnswer((d) => event.target.value);
        setSelectedAnswer(idx);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === currentAnswer) {
            setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
            setCurrentAnswer(7);
            setIsAnswered(AnswerStatus.WAIT);
        } else {
            setIsAnswered(AnswerStatus.WRONG)
        }
    };

    // 버튼 클릭 시 정담 체크하는 함수
    function handleClickedAnswer(answer) {
        setQuestion((prev) =>{
            return [...prev, answer];
        })
    }
    console.log(question)

    return (
        <div className={"question"}>
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

            {/*<h1>Quiz</h1>*/}
            {/*/!* 질문목록들 호출 *!/*/}
            {/*{question.map((q, index) => (*/}
            {/*    // 전체 질문 노출이 아닌 인덱스 순서대로 질문 호출*/}
            {/*    currentQuestion === index && (*/}
            {/*        <div key={q.id}>*/}
            {/*            <p>{q.text}</p>*/}
            {/*            <ul>*/}
            {/*                /!* 선택지가 많기 떄문에 호출 *!/*/}
            {/*                {q.answers.map((answer, idx) => (*/}
            {/*                    // 태그에 정답 부여*/}
            {/*                    <li key={idx}>*/}
            {/*                        <label>*/}
            {/*                            <input*/}
            {/*                                type="radio"*/}
            {/*                                name="answer"*/}
            {/*                                value={answer}*/}
            {/*                                checked={selectedAnswer === idx}*/}
            {/*                                onChange={handleAnswerChange(idx)}*/}
            {/*                            />*/}
            {/*                            {answer}*/}
            {/*                        </label>*/}
            {/*                    </li>*/}

            {/*                ))}*/}
            {/*                {isAnswered === AnswerStatus.WRONG ? (*/}
            {/*                    <p style={{color:"red"}}>틀렸습니다 다시 선택하세요 씨발년아</p>*/}
            {/*                ) : (<></>)}*/}
            {/*                <button onClick={handleNextQuestion}>Next Question</button>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*))}*/}
        </div>
    );
}