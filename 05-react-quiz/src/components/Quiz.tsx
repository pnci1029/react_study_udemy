import {useState} from "react";
import question from '../question.js';

export function Quiz() {
    // 질문목록을 보여주기위한 상태값. 배열이 0부터 시작이라 초기값 지정
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // 정답 상태값.
    const [currentAnswer, setCurrentAnswer] = useState('');

    const handleAnswerChange = (event) => {
        setCurrentAnswer(event.target.value);
    };

    const handleNextQuestion = () => {
        setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
        setCurrentAnswer('');
    };

    return (
        <>
            <h1>Quiz</h1>
            {/* 질문목록들 호출 */}
            {question.map((q, index) => (
                // 전체 질문 노출이 아닌 인덱스 순서대로 질문 호출
                currentQuestion === index && (
                    <div key={q.id}>
                        <p>{q.text}</p>
                        <ul>
                            {/* 선택지가 많기 떄문에 호출 */}
                            {q.answers.map((answer, idx) => (
                                // 태그에 정답 부여
                                <li key={idx}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="answer"
                                            value={answer}
                                            checked={currentAnswer === answer}
                                            onChange={handleAnswerChange}
                                        />
                                        {answer}
                                    </label>
                                </li>
                            ))}
                        </ul>
                        <button onClick={handleNextQuestion}>Next Question</button>
                    </div>
                )
            ))}
        </>
    );
}