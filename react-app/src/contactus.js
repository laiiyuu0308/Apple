import React from "react";
import "./contactus.css";
import banner from "./Pages/img/shop-pic/店面圖banner.jpeg";
import shop1 from "./Pages/img/shop-pic/店面圖7.jpg";
import shop2 from "./Pages/img/shop-pic/店面圖5.jpeg";
import shop3 from "./Pages/img/shop-pic/店面圖2.jpeg";

import GoogleMap from "./GoogleMap";

function ContactUs() {
  return (
    <div className="contactus">
      <img
        className="banner"
        src={banner}
        alt="店面圖"
        style={{ width: "100%" }}
      />
      <h2>聯絡我們</h2>

      <div className="container contact-items">
        <div className="item Email">
          <h4>聯絡信箱</h4>
          <p>octmoon@octmoon.com</p>
        </div>
        <div className="item Tel">
          <h4>客服電話</h4>
          <p>03-11112222</p>
        </div>
        <div className="item Address">
          <h4>門市地址</h4>
          <p>宜蘭縣大同區菓子路10巷4號</p>
        
        </div>
      </div>

      <div className="housetour">
        <h2>店面介紹</h2>
      <div className="tour">

     
        <div className="sit1">
          <img
            className="shop1"
            src={shop1}
            alt="店面圖"
            
          />
          <h4>室內舒適座位</h4>
        </div>
        <div className="sit2">
          <h4>美麗山景座位</h4>
          <img
            className="shop2"
            src={shop2}
            alt="店面圖"
            
          />
          
        </div>
        <div className="sit3">
          <img
            className="shop1"
            src={shop3}
            alt="店面圖"
            
          />
          <h4>日系廊台</h4>
        </div>
        </div>
      </div>
      <div className="googlemap">
        <GoogleMap />
      </div>
    </div>
  );
}

export default ContactUs;
