import {useEffect, useState} from "react";

interface Props{
}
export function QuizTimer({maxTime, timeout}) {
    // 퀴즈 타이머용 상태
    // 남은 시간들에 대한 상태
    const [remainingTime, setRemainingTime] = useState(maxTime);

    useEffect(() => {
        const times = setTimeout(timeout, maxTime);
        return() =>{
            clearTimeout(times)
        }
    }, [maxTime, timeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(p => p - 100);
        }, 100)
        return() =>{
            clearInterval(interval)
        }
    },[])
    console.log(remainingTime)
    return(
        <>
            <progress id={"question-time"} max={maxTime} value={remainingTime} />
        </>
    )
}