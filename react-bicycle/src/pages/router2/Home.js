import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home1</Link>
        </li>
        <li>
          <Link to="/about">About1</Link>
        </li>
        <li>
          <Link to="/about/:id">About1</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard1</Link>
        </li>
        <li>
          <Link to="/main/a">main</Link>
        </li>
      </ul>
      <hr />
      {props.children}
    </div>
  );
};
