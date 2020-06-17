/**
 * 轮播图 走马灯
 */
import React from 'react';
import { Card, Carousel } from 'antd';
// Button, message,
const Carousels = () => {
  const style = {
    width: 'calc(85vw)',
  };

  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <div style={style}>
      <Card title="文字背景轮播图" className="ant-fix">
        <Carousel afterChange={onChange} autoplay={true} effect="fade">
          <div>
            <h3>城府</h3>
          </div>
          <div>
            <h3>浪子新生</h3>
          </div>
          <div>
            <h3>偏偏系话你</h3>
          </div>
          <div>
            <h3>奈何城</h3>
          </div>
        </Carousel>
      </Card>
      <Card title="图片轮播图">
        <Carousel afterChange={onChange} autoplay={true} effect="fade">
          <div>
            <img src="/carousel-img/carousel-1.jpg" alt="" width="1200px" height="700px" />
          </div>
          <div>
            <img src="/carousel-img/carousel-2.jpg" alt="" width="1200px" height="700px" />
          </div>
          <div>
            <img src="/carousel-img/carousel-3.jpg" alt="" width="1200px" height="700px" />
          </div>
        </Carousel>
      </Card>
    </div>
  );
};

export default Carousels;
