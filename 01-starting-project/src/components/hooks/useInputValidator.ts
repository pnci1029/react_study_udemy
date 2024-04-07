import {useCallback} from "react";

interface Props{
    duration: number;
}

export function useInputValidator({duration}: Props) {

    const validator = useCallback(() =>{
        if (duration <= 0) {
            alert("0이상을 입력해주세요.")
            return false;
        }
    },[duration])

    return {validator}
}