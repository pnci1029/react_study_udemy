import {memo, useCallback, useMemo, useState} from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';

function isPrime(number) {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

/**
 * Counter 컴포넌트가 App 컴포넌트 상태가 변할때마다 재실행되면서
 * 불필요한 렌더링이 반복됨
 * memo 를 사용하면 Counter의 initialCount또는 props의 배열순서나 정보를 기억하여
 * 이전과 동일한 상태일 경우 렌더링을 저지함
 * 그러나 좋은방법은 아니다
  */

const Counter = memo (function Counter({ initialCount }) {
  log('<Counter /> rendered', 1);

  /**
   * useMemo -> 함수의 상태가 바뀜에 따라서 렌더링을 방지하기 위해 사용
   * useMemo <-> memo 구분 필요
   *
   * 익명함수("()")를 통해 함수(isPrime)를 저장하고 내부 의존성 값 중 하나라도 변하지 않으면 실행되지 않음
   * 의존성이 빈 배열이라면 절대 재실행 되지 않는다.
   */
  const initialCountIsPrime = useMemo(() =>isPrime(initialCount),[]);

  const [counter, setCounter] = useState(initialCount);

  const handleDecrement = useCallback(function handleDecrement() {
    setCounter((prevCounter) => prevCounter - 1);
  },[])

  const handleIncrement = useCallback(function handleIncrement() {
    setCounter((prevCounter) => prevCounter + 1);
  },[])

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  );
})

export default Counter;