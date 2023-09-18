import React from 'react';
import './Footer.css'; // 导入样式文件，可以根据需要自定义样式

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src="./img/拾月菓logo.png" alt="" width="200" height="100" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="footer-item">
              <h4>品牌故事</h4>
              <div class="content">
                <a href="#">品牌介紹</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="footer-item">
              <h4>門市據點</h4>
              <div class="content">
                <div>地址:宜蘭縣大同區菓子路10巷4號</div>
                <div>營業時間：每週四至週二11:00-18:00</div>
                <div>拾月菓股份有限公司 統編：55667788</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="footer-item">
              <h4>聯絡我們</h4>
              <div class="content">
                <div>電話 : 03-2232-1010</div>
                <div>Email : octmoon@octmoon.com</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="footer-item footer-subs">
              <h4>訂閱電子報</h4>
              <form>
                <input type="text" name="" placeholder="輸入您的電子郵件" />
                <input type="submit" value="訂閱" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        copyright &copy;2023 拾月菓
      </div>
    </footer>
  );
}

export default Footer;
