import React from 'react';

export default (props) => {
  return <div>info动态路由接受参数{props.match.params.id}</div>;
};
