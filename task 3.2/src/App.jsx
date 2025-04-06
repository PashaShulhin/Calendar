import React, { useState, useRef, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0); // Стан для відліку секунд
  const timerRef = useRef(null);

  const formatTime = (totalSeconds) => {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  const startTimer = () => {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1>{formatTime(seconds)}</h1>
      <button onClick={startTimer}>Play</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
