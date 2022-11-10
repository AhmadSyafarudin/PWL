import React from 'react';
import { IoIosClock } from "react-icons/io";

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div className="flex">
            <IoIosClock className="text-white text-lg my-1 w-8"/> 
            <h2 className="font-sans text-base font-medium text-white"> {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}

export default Clock;
  