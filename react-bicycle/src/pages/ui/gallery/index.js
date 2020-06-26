/**
 * 图片画廊
 */
import React, { useState } from 'react';
import { Card, Row, Col, Modal } from 'antd';

const imgs = [
  ['1.png', '2.png', '3.png', '4.png', '5.png'],
  ['6.png', '7.png', '8.png', '9.png', '10.png'],
  ['11.png', '12.png', '13.png', '14.png', '15.png'],
  ['16.png', '17.png', '18.png', '19.png', '20.png'],
  ['21.png', '22.png', '23.png', '24.png', '25.png'],
];
// 组件主体
const Gallery = () => {
  const style = {
    width: 'calc(85vw)',
  };

  const [visible, setVisible] = useState(false);
  const [curImg, setImg] = useState('');

  const openGallery = (srcImg) => {
    console.log(srcImg, '1');
    setVisible(true);
    setImg(srcImg);
  };

  const imgList = imgs.map((list) =>
    list.map((item) => (
      <Card
        title="图片画廊"
        cover={
          <img
            src={`/gallery/${item}`}
            alt="图片画廊"
            onClick={() => {
              openGallery(item);
            }}
          />
        }
        hoverable
        style={{ width: 240, marginBottom: '20px' }}
        key={item}
      >
        <Card.Meta title="Europe Street beat" description="www.instagram.com"></Card.Meta>
      </Card>
    )),
  );

  return (
    <div style={style}>
      <Row gutter={20}>
        <Col md={5}>{imgList[0]}</Col>
        <Col md={5}>{imgList[1]}</Col>
        <Col md={5}>{imgList[2]}</Col>
        <Col md={5}>{imgList[3]}</Col>
        <Col md={4}>{imgList[4]}</Col>
      </Row>
      <Modal
        visible={visible}
        width={350}
        height={500}
        onCancel={() => {
          setVisible(false);
        }}
        footer={null}
      >
        <img
          src={`/gallery/${curImg}`}
          alt="图片放大效果"
          style={{ width: 'auto', height: 'auto' }}
        />
      </Modal>
    </div>
  );
};

export default Gallery;
