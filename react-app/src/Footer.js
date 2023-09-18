import React from 'react';
import './Footer.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer>
      
        <div className="container">
     
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="footer-item">
              <ul>
                <h4>品牌故事</h4>
                <cli><a href='#'>品牌介紹</a></cli>
              </ul>
            </div>
          </div>
        
          <div className="col-md-3 col-sm-12">
            <div className="footer-item">
              <ul>
              <h4>門市據點</h4>
                <li >地址:宜蘭縣大同區菓子路10巷4號</li>
                <li>營業時間：每週四至週二11:00-18:0</li>
                <li>拾月菓股份有限公司 統編：55667788</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="footer-item">
              <ul>
              <h4>聯絡我們</h4>
                <li>電話 : 03-2232-1010</li>
                <li>Email : octmoon@octmoon.com</li>
                
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="footer-item footer-subs">
              <ul>

              <h4>訂閱電子報</h4>
              <form>
                <input type="text" name="" />
                <input type="submit" value="訂閱" />
              </form>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="conpyright">
        conpyright &copy;2023 拾月菓
      </div>
    </footer>
  );
}

export default Footer;