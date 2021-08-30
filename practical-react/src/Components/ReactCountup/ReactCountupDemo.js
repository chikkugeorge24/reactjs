import React from "react";
import CountUp, { useCountUp } from "react-countup";

const ReactCountupDemo = () => {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 20000,
    startOnMount: false,
  });
  return (
    <div>
      <h2>
        <div>{countUp}</div>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </h2>
      <h4>
        <CountUp end={100} />
      </h4>
      <h4>
        <CountUp end={100} duration={5} />
      </h4>
      <h4>
        <CountUp end={1000} start={500} />
      </h4>
      <h4>
        <CountUp end={1000} prefix="$" decimals={2} duration={5} />
      </h4>
      <h4>
        <CountUp end={1000} suffix="USD" decimals={2} duration={5} />
      </h4>
    </div>
  );
};

export default ReactCountupDemo;
