import React, { Component } from 'react';
import { Card, Table, Button } from 'antd';
import axios from './../../axios';
import Utils from './../../utils';

export default class User extends Component {
  render() {
    const style = {
      width: 'calc(85vw)',
    };
    return (
      <div style={style}>
        <Card>
          <Table bordered dataSource={[]} />
        </Card>
      </div>
    );
  }
}
