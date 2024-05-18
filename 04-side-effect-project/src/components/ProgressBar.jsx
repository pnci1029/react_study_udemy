import {useEffect, useState} from "react";

export function ProgressBar({Timer}) {
    const [remainingTime, setRemainingTime] = useState(Timer);


    useEffect(() =>{
        const interval = setInterval(() => {
            setRemainingTime((prev) => prev - 10);
        }, 10);

        // 클린업
        return () =>{
            clearInterval(interval);
        }
    })
    return (
        <progress value={remainingTime} max={Timer}/>
    );
}