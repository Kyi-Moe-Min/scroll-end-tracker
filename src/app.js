import React from "react";

export default class extends React.Component {
  componentDidMount() {
    this.ss = document.getElementById("ss");
  }
  timeouts = [];
  scrolled = e => {
    const { clientHeight, scrollTop, scrollHeight } = this.ss;
    // console.log(clientHeight + scrollTop, scrollHeight);
    if (scrollHeight === clientHeight + scrollTop) {
      this.doJob();
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
