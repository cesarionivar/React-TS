import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
  milisegundos: number;
};

export const Timer = ({ milisegundos }: TimerArgs) => {
  const [segundos, setSegundos] = useState(0);
  const timer = useRef<NodeJS.Timer>();

  console.log(milisegundos);

  useEffect(() => {
    timer.current && clearInterval(timer.current);

    timer.current = setInterval(() => {
      setSegundos((s) => s + 1);
    }, milisegundos);
  }, [milisegundos]);

  return (
    <>
      <h4>
        Timer: <small>{segundos}</small>
      </h4>
    </>
  );
};
