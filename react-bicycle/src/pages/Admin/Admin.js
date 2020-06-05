import React, { Component} from 'react';
import { Row, Col } from 'antd';
import NavLeft from '../../components/NavLeft';
import './index.less';
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='admin-wrapper'>
                <Row className='admin-row'>
                    <Col span={4} className='admin-col-left'>
                        <NavLeft />
                    </Col>
                    <Col span={20} className='admin-col-right'>主体内容</Col>
                </Row>
            </div>
        );
    }
}

export default Admin;