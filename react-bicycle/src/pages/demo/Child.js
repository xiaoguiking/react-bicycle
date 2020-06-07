import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentWillMount() {
    console.log("will mount");
  }
  //   UNSAFE_componentWillMount() {
  //     console.log("will mount");
  //   }

  componentDidMount() {
    console.log("did mount");
  }

  componentWillReceiveProps(newProps) {
    console.log("will props", newProps.name);
  }
  // 渲染两次
  shouldComponentUpdate() {
    console.log("should Update ");
    // 默认true 渲染
    return true;
    // return false;
  }

  componentWillUpdate() {
    console.log("will update");
  }

  componentDidUpdate() {
    console.log("did mount");
  }

  componentWillUnmount() {
    console.log("Unmount");
  }
  render() {
    return (
      <div>
        <p>这里是子组件，测试生命周期</p>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
