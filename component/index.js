import React from 'react'
import { curry } from "ramda"

let audio = new Audio('-24-countdown.mp3');

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: new Date(),
      count: getTimeRemaining(props.end, new Date())
    };

    this.tick = this.tick.bind(this);
  }

  tick() {
    const current = new Date();
    this.setState({
      count: getTimeRemaining(this.props.end, current),
      current: current
    })
  }

  render() {
    if (this.state.current > this.props.end) {
      audio.pause();
      return (
        <h1 className="text-center clock">Countdown Ended</h1>
      )

    } else {
      setTimeout(this.tick, 1000);

      if (Number(this.state.count.seconds) % 4 === 0) {
        audio.pause();
        audio.load();
        audio.play();
      }

      const remain = this.state.count;
      return (
        <h1 className="text-center clock">{remain.hours}:{remain.minutes}:{remain.seconds}</h1>
      )
    }

  }
}

export default Home


function getTimeRemaining(endtime, now) {

  const padBy2 = pad(2);

  var t = Date.parse(endtime) - Date.parse(now);
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  
  return {
    'total': t,
    'days': days,
    'hours': padBy2(hours),
    'minutes': padBy2(minutes),
    'seconds': padBy2(seconds)
  };
}

const pad = curry((size, num) => {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
});
