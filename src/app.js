import React from "react";

export default class extends React.Component {
  componentDidMount() {
    this.ss = document.getElementById("ss");
  }
  timeouts = [];
  scrolled = e => {
    const { offsetHeight, scrollTop, scrollHeight } = this.ss;
    // console.log(offsetHeight + scrollTop, scrollHeight);
    if (scrollHeight - (offsetHeight + scrollTop) < 20) {
      this.clearTimeouts();
      this.timeouts.push(setTimeout(this.doJob, 500));
    }
  };

  doJob = () => {
    console.log("it's at the end.");
  };

  clearTimeouts = () => {
    this.timeouts.forEach(t => clearTimeout(t));
    this.timeouts = [];
  };

  render() {
    return (
      <div id="ss" className="scroller" onScroll={this.scrolled}>
        <div id="ct" />
      </div>
    );
  }
}
