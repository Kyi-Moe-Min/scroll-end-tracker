import React from "react";

export default class extends React.Component {
  componentDidMount() {
    this.ss = document.getElementById("ss");
  }

  scrolled = e => {
    const { offsetHeight, scrollTop, scrollHeight } = this.ss;
    console.log(offsetHeight + scrollTop, scrollHeight);
    if (offsetHeight + scrollTop === scrollHeight)
      console.log("it's at the end.");
  };

  render() {
    return (
      <div id="ss" className="scroller" onScroll={this.scrolled}>
        <div id="ct" />
      </div>
    );
  }
}
