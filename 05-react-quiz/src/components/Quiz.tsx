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

    /**
     * 정답을 섞어주기 위해 Question에 있는 answer들을 배열에 삽입
     * 원본은 그대로 두고 shuffle하기 위해 shuffledAnswer이라는 배열 생성
     */
    const shuffledAnswer = [...Question[activeQuestionIdx].answers];
    console.log(shuffledAnswer)

    /**
     * 셔플 해주는 코드
     * 위 콘솔과 아래 콘솔 내용은 다르다.
     */
    shuffledAnswer.sort(() =>Math.random() - 0.5);
    console.log(shuffledAnswer)

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
                    {/*
                    기존 Question[activeQuestionIdx].answers 구문은 Question Json데이터에서
                    answer정보를 순차적으로 가져오기 때문에 shuffledAnswer로 교체
                     */}
                    {shuffledAnswer.map((answer) =>
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