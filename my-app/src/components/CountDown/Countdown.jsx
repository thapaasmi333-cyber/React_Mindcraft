import { useEffect, useState } from "react";

export default function CountDown() {
  const [time, setTime] = useState(10);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setRunning(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [running]);

  return (
    <>
      <h1> Countdown: {time}</h1>

      <button onClick={() => setRunning(true)}>START</button>

      <button onClick={() => setRunning(false)}>START</button>
    </>
  );
}
