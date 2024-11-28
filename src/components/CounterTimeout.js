import React, { useState, useEffect, useRef } from "react";

const CounterTimeout = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetToZero = () => {
    clearInterval(timerRef.current);
    setCount(0);
  };

  const startIncrement = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(increment, 1000);
  };

  const startDecrement = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(decrement, 1000);
  };

  useEffect(() => {
    // Cleanup interval on component unmount
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={startIncrement}>Start</button>
      <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={startDecrement}>Decrement</button>
      <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={resetToZero}>Reset</button>
    </div>
  );
};

export default CounterTimeout;