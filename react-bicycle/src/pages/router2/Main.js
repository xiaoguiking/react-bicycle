import React from 'react';
import { Link } from 'react-router-dom';

export const Main = (props) => {
  return (
    <div>
      Main主页面
      <Link to="/main/id1">嵌套路由1</Link>
      <Link to="/main/id2">嵌套路由2</Link>
      <Link to="/main/id3">嵌套路由3</Link>
      <hr />
      {props.children}
    </div>
  );
};

// <props.children />
