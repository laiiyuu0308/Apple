import React from 'react';
import './gift.css';
import customGiftBoxImage from './img/包裝圖片.png'; // 导入图片

function CustomGiftBoxCard() {
  return (
    <div className="card">
      <img className="card-img-top" src={customGiftBoxImage} alt="Card image" style={{ width: '100%' }} />
      <div className="card-body">
        <h4 className="card-title">客製化禮物盒</h4>
        <p className="card-text">精緻客製化禮物盒，充滿日本風味的點心，為特別場合增添獨特的美味和驚喜</p>
        <a href="#" className="btn btn-danger">開始製作禮物盒</a>
      </div>
    </div>
  );
}

export default CustomGiftBoxCard;
