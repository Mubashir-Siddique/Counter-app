import React, { Component } from "react";

// jsx expression compiled to React.createElement

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    // imageUrl: "https://picsum.photos/200",
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = (product) => {
    console.log("Increment Clicked!", this.state.count);
    // this.state.count++;
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formarCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {/* {this.state.tags.length === 0 && <p>There are no Tags!</p>} */}
      </>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formarCount() {
    //   const x = <h1>Zero</h1>; // jsx expression are just like js objects

    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
