import {useEffect, useState} from "react";
import Question from '../question.js';
import quizComplete from '../assets/quiz-complete.png';

enum AnswerStatus {
    WRONG = "WRONG",
    WAIT = "WAIT",
}

export function Quiz() {
    // 전체 시간
    const maxTime = 15000;
    //새로 고쳐질 시간
    const returningTime = 20000;

    // 퀴즈 타이머용 상태
    // 남은 시간들에 대한 상태
    const [remainingTime, setRemainingTime] = useState(maxTime);

    useEffect(() => {
        // setTimeout(maxTime, returningTime);
    },[])

    useEffect(() => {
        setInterval(() => {
            setRemainingTime(p => p - 100);
        }, 100)
    },[])

    const [isAnswered, setIsAnswered] = useState(AnswerStatus.WAIT);

    const [question, setQuestion] = useState([]);
    const activeQuestionIdx = question.length;
    const isQuestionEnd = activeQuestionIdx === Question.length;
    console.log(Question.length)

    /**
     * 아래 조건 Return 문을 위로 옮김
     * shuffledAnswer 계산 하는 과정에 activeQuestionoIdx가
     * json 인덱스를 초과하는 경우가 발생하여 위치 수정
     */

    if (isQuestionEnd) {
        return (
            <div id={"summary"}>
                <img src={quizComplete}/>
                <h2>Quiz End!</h2>
            </div>
        )
    }

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
    shuffledAnswer.sort(() => Math.random() - 0.5);
    console.log(shuffledAnswer)

    // 버튼 클릭 시 정담 체크하는 함수
    function handleClickedAnswer(answer) {
        setQuestion((prev) => {
            return [...prev, answer];
        })
    }


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
            <progress id={"question-time"} max={maxTime} value={remainingTime} />
        </div>
    );
}