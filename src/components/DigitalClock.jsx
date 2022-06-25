import React, { Component } from 'react';
import './DigitalClock.css'

class DigitalClock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: this.showTime()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: this.showTime()
      });
    }
    render() {
      return (
        <div id="MyClockDisplay" className="clock">{this.state.time}</div>
      );
    }

    showTime(){
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var session = "AM";
        
        if(h === 0){
            h = 12;
        }
        
        if(h > 12){
            h = h - 12;
            session = "PM";
        }
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        
        var time = h + ":" + m + ":" + s + " " + session;
        return time;
        
    }
    
  }

  export default DigitalClock;