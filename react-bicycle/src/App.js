import React, { Fragment } from 'react';
import './index.less';

function App(props) {
  return (
    <Fragment>
      {props.children}
    </Fragment>
  );
}

export default App;
