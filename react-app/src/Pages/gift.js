import React from 'react';
import './gift.css';
import cakepackage from './img/包裝圖片.png'; // 导入图片
import step1 from './img/step1.png';
import step2 from './img/step2.png';
import step3 from './img/step3.png';
import arrow from './img/箭頭.png';
import { Link } from 'react-router-dom';
function page4() {
  return (
    
    <div className='boxxx'> 

    <h4 className="card-title">客製化禮物盒</h4>
    <div className='box'>
      <div>
      <img className="card-img-top" src={cakepackage} alt="包裝圖片"   />
      </div>
      <div className='box2'>

      <div className='box3'>
        <div className='step01'>
          <img className="step1" src={step1} alt="客製化禮盒" style={{ width: "120px" }}/>
          <img className="arrow" src={arrow} alt="方向" style={{ width: "70px" }} />
          <p>選擇禮物規格</p>
        </div>
        <div className='step02'>
          <img className="step2" src={step2} alt="客製化禮盒" style={{ width: "130px" }}/>
          <img className="arrow" src={arrow} alt="方向" style={{ width: "70px" }}  />
          <p>選擇商品</p>
        </div>
        <div className='step03'>
          <img className="step3" src={step3} alt="客製化禮盒" style={{ width: "120px" }}/>
          <p>選擇貼心小卡</p>
        </div>
        <a href="/gift" className="btn btn-danger">開始製作禮物盒</a>
        {/* <Link className="btn btn-danger" to="giftbox">
                開始製作禮物盒
              </Link> */}
      {/* <div className='box4'>

      </div> */}
        
      </div>
      </div>

    </div>
      
    </div>
  );
}

export default page4;
