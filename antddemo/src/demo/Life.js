import React, { Component } from "react";
import Child from "./Child";
// 生命周期
export default class Life extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleAdd() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleClickAdd = () => {
    console.log("箭头函数点击");
    this.setState({
      count: this.state.count * 5,
    });
  };
  render() {
    const style = {
      padding: 10,
      border: "1px solid red",
    };
    return (
      <div style={style}>
        <p>生命周期介绍</p>
        <button onClick={this.handleAdd.bind(this)}>点击我</button>
        <button onClick={this.handleClickAdd}>点击我</button>
        <p>{this.state.count}</p>
        {/* <Child name="学习" /> */}
        <Child name={this.state.count} />
      </div>
    );
  }
}
