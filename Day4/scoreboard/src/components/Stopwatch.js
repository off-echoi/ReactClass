import React,{useState, useEffect,useRef} from 'react';

export function Stopwatch(props) {
  let tickRef;
  const [isRunning, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  //   state = {
  //    isRunning : false,
  //    timer : 0,
  //   };

  //useInterval = useEffect + setInterval
  useInterval(()=>{
    //custom 로직
    if(isRunning){
      setTimer(timer+1)
    }
  },1000);

  // useEffect(() => {
  //   //  Dom이 렌더린 된 후 sideEffect
  //   tickRef = setInterval(tick, 1000);
  //   // componentWillUnmount 는 return 펑션
  //   return () => {
  //     clearInterval(tickRef);
  //   }
  // },[]);
  // []는 componentdidmount한번만 렌더륑

  // function tick() {
  //   if(isRunning){
  //     setTimer(timer+1)
  //   }
  // }
  return (
    <div className="stopwatch">
      <h1 className="h1">StopWatch</h1>
      <span className="stopwatch-time">{timer}</span>
      <button onClick={()=>setRunning(!isRunning)}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={() => setTimer(0)}>Reset</button>
    </div>
  );
}

// 이 두개의 라이프사이클은 useEffect로 대체가넝
//   componentDidMount() {
//     // console.log('cdm');
//     this.tickRef = setInterval(this.tick,1000);
//
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.tickRef);
//   }
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}