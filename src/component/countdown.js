import React, {useEffect} from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import moment from "moment";

export default function Countdown(props) {
    

  return (
    <h1 className="timer-circle-wrapper">
      <CountdownCircleTimer
        key={props.id}
        size={282}
        isPlaying={props.counting ? true : false}
        duration={props.time * 60}
        colors= "#0052cc"
      >
        {({ remainingTime }) =>{
          moment()
            .hour(0)
            .minute(0)
            .second(remainingTime)
            .format("mm : ss")
            
            useDocumentTitle(remainingTime);
          }
        }
      </CountdownCircleTimer>
    </h1>
  );
}